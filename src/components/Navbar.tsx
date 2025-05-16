
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, UserRole } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, User, LogOut, Settings, BookOpen, Calendar, Search, Home } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  requiredRoles: UserRole[];
}

const navItems: NavItem[] = [
  { 
    label: 'Trang chủ',
    href: '/',
    icon: <Home className="w-4 h-4 mr-2" />,
    requiredRoles: ["Guest", "Member", "Staff", "Consultant", "Manager", "Admin"] 
  },
  { 
    label: 'Khóa học',
    href: '/courses',
    icon: <BookOpen className="w-4 h-4 mr-2" />,
    requiredRoles: ["Guest", "Member", "Staff", "Consultant", "Manager", "Admin"] 
  },
  { 
    label: 'Đánh giá rủi ro',
    href: '/assessment',
    icon: <Search className="w-4 h-4 mr-2" />,
    requiredRoles: ["Guest", "Member", "Staff", "Consultant", "Manager", "Admin"] 
  },
  { 
    label: 'Đặt lịch hẹn',
    href: '/appointment',
    icon: <Calendar className="w-4 h-4 mr-2" />,
    requiredRoles: ["Member", "Staff", "Consultant", "Manager", "Admin"] 
  },
  { 
    label: 'Dashboard',
    href: '/dashboard',
    icon: <Settings className="w-4 h-4 mr-2" />,
    requiredRoles: ["Staff", "Consultant", "Manager", "Admin"] 
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout, hasPermission } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-prevention-600">Drug Use Prevention</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              hasPermission(item.requiredRoles) && (
                <Link 
                  key={item.href}
                  to={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-prevention-50 hover:text-prevention-600"
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            ))}

            <div className="ml-4 flex items-center">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      {user?.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="h-10 w-10 rounded-full object-cover" 
                        />
                      ) : (
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          <User className="h-5 w-5" />
                        </span>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      <div className="flex flex-col">
                        <span>{user?.name}</span>
                        <span className="text-xs text-muted-foreground">{user?.role}</span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer w-full">
                        <User className="mr-2 h-4 w-4" />
                        <span>Hồ sơ của tôi</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Đăng xuất</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex space-x-2">
                  <Button asChild variant="outline">
                    <Link to="/login">Đăng nhập</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Đăng ký</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-500 hover:text-prevention-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-2 py-2 space-y-2">
            {navItems.map((item) => (
              hasPermission(item.requiredRoles) && (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-prevention-50 hover:text-prevention-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            ))}

            {isAuthenticated ? (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <Link
                  to="/profile"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-prevention-50 hover:text-prevention-600"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-4 h-4 mr-2" />
                  Hồ sơ của tôi
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-prevention-50 hover:text-prevention-600"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Đăng xuất
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Button asChild variant="outline" className="w-full justify-center">
                  <Link to="/login">Đăng nhập</Link>
                </Button>
                <Button asChild className="w-full justify-center">
                  <Link to="/register">Đăng ký</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
