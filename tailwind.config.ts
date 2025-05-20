/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // This ensures the 'dark' class controls dark mode
	content: [
	  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: 'hsl(var(--card))',
		  'card-foreground': 'hsl(var(--card-foreground))',
		  popover: 'hsl(var(--popover))',
		  'popover-foreground': 'hsl(var(--popover-foreground))',
		  primary: 'hsl(var(--primary))',
		  'primary-foreground': 'hsl(var(--primary-foreground))',
		  secondary: 'hsl(var(--secondary))',
		  'secondary-foreground': 'hsl(var(--secondary-foreground))',
		  muted: 'hsl(var(--muted))',
		  'muted-foreground': 'hsl(var(--muted-foreground))',
		  accent: 'hsl(var(--accent))',
		  'accent-foreground': 'hsl(var(--accent-foreground))',
		  destructive: 'hsl(var(--destructive))',
		  'destructive-foreground': 'hsl(var(--destructive-foreground))',
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  // Include your chart colors if they're used elsewhere
		  'chart-1': 'hsl(var(--chart-1))',
		  'chart-2': 'hsl(var(--chart-2))',
		  'chart-3': 'hsl(var(--chart-3))',
		  'chart-4': 'hsl(var(--chart-4))',
		  'chart-5': 'hsl(var(--chart-5))',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [],
  };