import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';
import { Lock, LogOut, Shield } from 'lucide-react';

interface AdminContextType {
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  showLoginDialog: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}

interface AdminProviderProps {
  children: ReactNode;
}

export function AdminProvider({ children }: AdminProviderProps) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Check if admin is already logged in (from localStorage)
  useEffect(() => {
    const adminStatus = localStorage.getItem('jioww_admin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = (user: string, pass: string) => {
    // Simple admin credentials - In production, this should be handled by backend
    console.log('Attempting login with:', { username: user, password: pass });
    
    if (user === 'admin' && pass === 'admin123') {
      console.log('Login successful!');
      setIsAdmin(true);
      localStorage.setItem('jioww_admin', 'true');
      setShowDialog(false);
      setUsername('');
      setPassword('');
      toast.success('Admin login successful!');
      return true;
    } else {
      console.log('Login failed - invalid credentials');
      toast.error('Invalid credentials. Use username: admin, password: admin123');
      return false;
    }
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('jioww_admin');
    toast.success('Logged out successfully');
  };

  const showLoginDialog = () => {
    setShowDialog(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout, showLoginDialog }}>
      {children}
      
      {/* Admin Login Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Shield className="w-6 h-6 text-primary" />
              Admin Login
            </DialogTitle>
            <DialogDescription>
              Enter your admin credentials to access administrative features
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="admin-username">Username</Label>
              <Input
                id="admin-username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border-gray-300 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-gray-300 focus:border-primary"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary to-amber-600 text-white"
              >
                <Lock className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </AdminContext.Provider>
  );
}

// Admin Button Component (to be placed in header or floating)
export function AdminButton() {
  const { isAdmin, logout, showLoginDialog } = useAdmin();

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isAdmin ? (
        <Button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white shadow-lg rounded-full w-14 h-14 p-0 border-2 border-white"
          title="Admin Logout"
        >
          <LogOut className="w-6 h-6" />
        </Button>
      ) : (
        <Button
          onClick={showLoginDialog}
          className="bg-gradient-to-r from-primary to-amber-600 text-white shadow-lg rounded-full w-14 h-14 p-0 hover:shadow-xl hover:shadow-primary/50 transition-all border-2 border-white"
          title="Admin Login"
        >
          <Shield className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}