const Logo = ({ className = "", light = false }: { className?: string; light?: boolean }) => {
  return (
    <svg
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* DTL Text */}
      <text
        x="10"
        y="45"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="42"
        fontWeight="500"
        fill={light ? "hsl(40, 20%, 98%)" : "hsl(222, 47%, 18%)"}
        letterSpacing="4"
      >
        DTL
      </text>
      
      {/* LAW Text */}
      <text
        x="115"
        y="30"
        fontFamily="DM Sans, sans-serif"
        fontSize="14"
        fontWeight="500"
        fill="hsl(145, 45%, 28%)"
        letterSpacing="3"
      >
        LAW
      </text>
      
      {/* Diagonal Line */}
      <line
        x1="155"
        y1="8"
        x2="175"
        y2="55"
        stroke={light ? "hsl(40, 20%, 98%)" : "hsl(222, 47%, 18%)"}
        strokeWidth="1.5"
      />
      
      {/* Du Toit Lambrechts */}
      <text
        x="10"
        y="65"
        fontFamily="DM Sans, sans-serif"
        fontSize="11"
        fontWeight="400"
        fill={light ? "hsl(40, 15%, 80%)" : "hsl(222, 30%, 40%)"}
        letterSpacing="2"
      >
        du toit lambrechts
      </text>
    </svg>
  );
};

export default Logo;
