'use client';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  href, 
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-lg transition-colors";
  const styles = {
    primary: `${baseStyles} bg-zinc-900 text-white hover:bg-zinc-800 ${className}`,
    outline: `${baseStyles} border border-zinc-900 text-zinc-900 hover:bg-zinc-100 ${className}`
  };

  if (href) {
    return (
      <a href={href} className={styles[variant]}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}