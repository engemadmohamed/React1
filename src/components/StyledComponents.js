import styled from "styled-components";

export const HeroBanner = styled.header`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%);
  border-bottom: 2px solid rgba(234, 179, 8, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  padding: 2.5rem 1.5rem;
  border-radius: 0 0 1.5rem 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const MainTitle = styled.h1`
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 800;
  font-size: 2.4rem;
  background: linear-gradient(90deg, #fef08a 0%, #eab308 50%, #ca8a04 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25rem;
  letter-spacing: -0.5px;
`;

export const EyebrowText = styled.span`
  color: #94a3b8;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
`;

export const StyledActionButton = styled.button`
  background: ${(props) =>
    props.$variant === "danger"
      ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
      : props.$variant === "success"
      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
      : "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)"};
  color: ${(props) => (props.$variant === "primary" || !props.$variant ? "#0f172a" : "#ffffff")};
  font-weight: 700;
  border: none;
  padding: 0.65rem 1.25rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 14px ${(props) =>
    props.$variant === "danger"
      ? "rgba(239, 68, 68, 0.3)"
      : props.$variant === "success"
      ? "rgba(16, 185, 129, 0.3)"
      : "rgba(234, 179, 8, 0.3)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${(props) =>
      props.$variant === "danger"
        ? "rgba(239, 68, 68, 0.4)"
        : props.$variant === "success"
        ? "rgba(16, 185, 129, 0.4)"
        : "rgba(234, 179, 8, 0.4)"};
    filter: brightness(1.08);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StyledGenreChip = styled.span`
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(234, 179, 8, 0.3);
  color: #fef08a;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  backdrop-filter: blur(4px);
`;
