import styled from "styled-components";

const Item = styled.div`
  height: 39px;
  border-bottom: 1px solid #f4f6f9;
  display: flex;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
`;

const FilterItem = ({
  title,
  onClick
}: {
  title: string;
  onClick: () => void;
}) => {
  return <Item onClick={onClick}>{title}</Item>;
};

export default FilterItem;
