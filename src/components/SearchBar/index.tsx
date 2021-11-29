import { MdSearch } from 'react-icons/md';
import { Container, Button, Input } from './styles';

const SearchBar = (): JSX.Element => {
  return (
    <Container>
      <Input placeholder="Busque por um produto"/>
      <Button>
        <MdSearch size={26} color="#fff" />
        <span>BUSCAR</span>
      </Button>
    </Container>
  );
}

export default SearchBar;