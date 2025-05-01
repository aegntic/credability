
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-lg bg-card p-8 shadow-md">
          <h1 className="mb-6 text-center text-4xl font-bold text-foreground">Welcome to CREDABILITY</h1>
          
          {user ? (
            <div className="space-y-6">
              <p className="text-center text-xl text-muted-foreground">
                Hello, {user.email}! You are now signed in.
              </p>
              <div className="flex justify-center">
                <Link to="/profile">
                  <Button>View Your Profile</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-center text-xl text-muted-foreground">
                Sign in to get started with our application.
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/auth/login">
                  <Button>Sign In</Button>
                </Link>
                <Link to="/auth/signup">
                  <Button variant="outline">Create Account</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
