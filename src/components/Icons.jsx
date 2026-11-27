function Icon({ size = 20, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props) {
  return <Icon {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>;
}
export function BagIcon(props) {
  return <Icon {...props}><path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></Icon>;
}
export function HeartIcon({ filled, ...props }) {
  return (
    <Icon {...props} fill={filled ? "currentColor" : "none"}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    </Icon>
  );
}
export function StarIcon(props) {
  return (
    <Icon {...props} fill="currentColor" stroke="none">
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
    </Icon>
  );
}
export function ClockIcon(props) {
  return <Icon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>;
}
export function PlusIcon(props) {
  return <Icon {...props}><path d="M12 5v14M5 12h14" /></Icon>;
}
export function MinusIcon(props) {
  return <Icon {...props}><path d="M5 12h14" /></Icon>;
}
export function CloseIcon(props) {
  return <Icon {...props}><path d="M6 6l12 12M18 6 6 18" /></Icon>;
}
export function TrashIcon(props) {
  return <Icon {...props}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></Icon>;
}
export function ArrowRightIcon(props) {
  return <Icon {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
}
export function ArrowLeftIcon(props) {
  return <Icon {...props}><path d="M19 12H5M11 6l-6 6 6 6" /></Icon>;
}
export function BoltIcon(props) {
  return <Icon {...props}><path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" /></Icon>;
}
export function PinIcon(props) {
  return <Icon {...props}><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11Z" /><circle cx="12" cy="10" r="2.2" /></Icon>;
}
export function ShieldIcon(props) {
  return <Icon {...props}><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></Icon>;
}
export function TagIcon(props) {
  return <Icon {...props}><path d="M3 12V4h8l10 10-8 8L3 12Z" /><circle cx="7.5" cy="8.5" r="1.2" /></Icon>;
}
export function UtensilsIcon(props) {
  return <Icon {...props}><path d="M6 3v8M4 3v5a2 2 0 0 0 4 0V3M6 11v10" /><path d="M17 3c-2 2-3 5-3 8h3v10" /></Icon>;
}
export function UserIcon(props) {
  return <Icon {...props}><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" /></Icon>;
}
export function HomeIcon(props) {
  return <Icon {...props}><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /></Icon>;
}
export function ReceiptIcon(props) {
  return <Icon {...props}><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9 8h6M9 12h6" /></Icon>;
}
export function EyeIcon(props) {
  return <Icon {...props}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></Icon>;
}
export function EyeOffIcon(props) {
  return <Icon {...props}><path d="M3 3l18 18" /><path d="M10.6 6.2A9.8 9.8 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3.2 3.8M6.5 7.5C3.8 9.3 2 12 2 12s4 7 10 7a9.5 9.5 0 0 0 4.2-1" /></Icon>;
}
export function MailIcon(props) {
  return <Icon {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>;
}
export function LockIcon(props) {
  return <Icon {...props}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></Icon>;
}
export function PhoneIcon(props) {
  return <Icon {...props}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Icon>;
}
export function ChatIcon(props) {
  return <Icon {...props}><path d="M4 5h16v11H9l-5 4V5Z" /></Icon>;
}
export function CheckIcon(props) {
  return <Icon {...props}><path d="m5 12 5 5 9-10" /></Icon>;
}