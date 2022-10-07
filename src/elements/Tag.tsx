import styled from "styled-components";

const StyledTag = styled.span`
  background: lightgray;
  padding: 3px 5px;
  margin-left: 5px;
  border-radius: 10px;
`;

const StyledIcon = styled.span`
  padding: 0 5px;
  cursor: pointer;
`;

const Tag = ({
  children,
  onClick
}: {
  children: string;
  onClick: () => void;
}) => {
  return (
    <StyledTag>
      {children}
      <StyledIcon onClick={onClick}>x</StyledIcon>
    </StyledTag>
  );
};

export default Tag;
