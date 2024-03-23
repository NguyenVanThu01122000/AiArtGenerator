import Button, { ButtonProps } from "@mui/material/Button";

interface ButtonGeneralProps extends ButtonProps {
  className?: string;
  loading?: boolean;
}
const ButtonGeneral = ({
  children,
  className,
  onClick,
  disabled,
  loading,
  ...rest
}: ButtonGeneralProps) => {
  return (
    <Button
      className={`custom-button ${className}`}
      onClick={onClick}
      // loading={loading}
      disabled={disabled}
      {...rest} //: Sử dụng rest parameter để chấp nhận tất cả các props khác mà không cần phải định nghĩa từng prop một.
    >
      {children}
    </Button>
  );
};

export default ButtonGeneral;
