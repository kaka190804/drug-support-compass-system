
import React, { createContext, useState, useContext, useEffect } from "react";

export type UserRole = "Guest" | "Member" | "Staff" | "Consultant" | "Manager" | "Admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  hasPermission: (requiredRoles: UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Role hierarchy (higher index means more permissions)
const roleHierarchy: UserRole[] = [
  "Guest",
  "Member",
  "Staff",
  "Consultant",
  "Manager",
  "Admin"
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check for stored user on load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // In a real app, this would be an API call
    // For demo purposes, we'll simulate a login
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo login logic (replace with actual auth API)
      if (email === "admin@example.com" && password === "password") {
        const userData: User = {
          id: "1",
          name: "Admin User",
          email,
          role: "Admin",
          avatar: "https://i.pravatar.cc/150?u=admin@example.com"
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else if (email === "manager@example.com" && password === "password") {
        const userData: User = {
          id: "2",
          name: "Manager User",
          email,
          role: "Manager",
          avatar: "https://i.pravatar.cc/150?u=manager@example.com"
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else if (email === "consultant@example.com" && password === "password") {
        const userData: User = {
          id: "3",
          name: "Consultant User",
          email,
          role: "Consultant", 
          avatar: "https://i.pravatar.cc/150?u=consultant@example.com"
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else if (email === "staff@example.com" && password === "password") {
        const userData: User = {
          id: "4",
          name: "Staff User",
          email,
          role: "Staff",
          avatar: "https://i.pravatar.cc/150?u=staff@example.com"
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else if (email === "member@example.com" && password === "password") {
        const userData: User = {
          id: "5",
          name: "Member User",
          email,
          role: "Member",
          avatar: "https://i.pravatar.cc/150?u=member@example.com"
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    // In a real app, this would be an API call
    // For demo purposes, we'll simulate registration
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo registration logic (replace with actual auth API)
      const userData: User = {
        id: Date.now().toString(),
        name,
        email,
        role: "Member" // Default role for new users
      };
      
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Check if user has permission based on role
  const hasPermission = (requiredRoles: UserRole[]): boolean => {
    if (!user) return false;
    
    // Get the numerical level of the user's role
    const userRoleLevel = roleHierarchy.indexOf(user.role);
    
    // Check if user's role level is sufficient for any of the required roles
    return requiredRoles.some(role => {
      const requiredRoleLevel = roleHierarchy.indexOf(role);
      return userRoleLevel >= requiredRoleLevel;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        isLoading,
        hasPermission
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
