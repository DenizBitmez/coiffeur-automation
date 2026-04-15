export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill="currentColor"
        />
        <path
          d="M12 6C9.24 6 7 8.24 7 11C7 12.76 7.85 14.31 9.04 15.28L6.5 18L7.91 19.41L10.7 16.62C11.12 16.86 11.55 17 12 17C14.76 17 17 14.76 17 12C17 8.24 14.76 6 12 6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-headline text-xl font-bold">Stil Randevu</span>
    </div>
  );
}
