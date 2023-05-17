import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&last-child td, &last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Giffy',
    last_name: 'Dupoy',
    email: 'gdupoy0@forbes.com',
    gender: 'Male',
    ip_address: '133.195.155.36',
  },
  {
    id: 2,
    first_name: 'Jolene',
    last_name: 'Kennealy',
    email: 'jkennealy1@goodreads.com',
    gender: 'Female',
    ip_address: '66.112.47.57',
  },
  {
    id: 3,
    first_name: 'Cary',
    last_name: 'Brawley',
    email: 'cbrawley2@pagesperso-orange.fr',
    gender: 'Male',
    ip_address: '30.24.57.28',
  },
  {
    id: 4,
    first_name: 'Husein',
    last_name: 'McKernon',
    email: 'hmckernon3@shutterfly.com',
    gender: 'Male',
    ip_address: '62.18.48.77',
  },
  {
    id: 5,
    first_name: 'Aluino',
    last_name: 'Gumly',
    email: 'agumly4@digg.com',
    gender: 'Male',
    ip_address: '93.127.237.116',
  },
  {
    id: 6,
    first_name: 'Lorenza',
    last_name: 'Lakeland',
    email: 'llakeland5@epa.gov',
    gender: 'Female',
    ip_address: '46.210.227.0',
  },
  {
    id: 7,
    first_name: 'Finlay',
    last_name: 'Ferencowicz',
    email: 'fferencowicz6@princeton.edu',
    gender: 'Male',
    ip_address: '126.7.158.19',
  },
  {
    id: 8,
    first_name: 'Darrick',
    last_name: 'Traite',
    email: 'dtraite7@multiply.com',
    gender: 'Male',
    ip_address: '36.192.242.185',
  },
  {
    id: 9,
    first_name: 'Malissia',
    last_name: 'Shadfourth',
    email: 'mshadfourth8@vkontakte.ru',
    gender: 'Female',
    ip_address: '73.184.52.75',
  },
  {
    id: 10,
    first_name: 'Tommy',
    last_name: 'Kitchen',
    email: 'tkitchen9@blogs.com',
    gender: 'Female',
    ip_address: '10.133.17.93',
  },
];
