import styled from "styled-components";

export const HeroBanner = styled.section`
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  padding: 2.5rem 0;
  margin-bottom: 2rem;
`;

export const MainTitle = styled.h1`
  font-family: var(--font-main);
  font-weight: 800;
  font-size: 2rem;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  margin-bottom: 0.35rem;
`;

export const EyebrowText = styled.span`
  color: var(--accent-primary);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  display: block;
  margin-bottom: 0.35rem;
`;

export const StyledActionButton = styled.button`
  background: ${(props) =>
    props.$variant === "danger"
      ? "var(--danger)"
      : props.$variant === "success"
      ? "var(--success)"
      : props.$variant === "outline"
      ? "transparent"
      : "var(--accent-primary)"};
  color: ${(props) =>
    props.$variant === "outline"
      ? "var(--text-primary)"
      : props.$variant === "primary" || !props.$variant
      ? "#0f172a"
      : "#ffffff"};
  border: ${(props) =>
    props.$variant === "outline" ? "1px solid var(--border-color)" : "none"};
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.55rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.15s ease, transform 0.15s ease, background-color 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
    background: ${(props) =>
      props.$variant === "outline" ? "var(--bg-elevated)" : ""};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StyledGenreChip = styled.span`
  background: var(--accent-subtle);
  border: 1px solid var(--accent-border);
  color: var(--accent-primary);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;
