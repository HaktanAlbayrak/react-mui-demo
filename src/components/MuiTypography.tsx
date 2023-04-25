import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>Sub Title 1</Typography>
      <Typography variant='subtitle2'>Sub Title 2</Typography>

      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis
        dolorem blanditiis ut, rem perferendis totam qui quo quos laborum
        quisquam unde nostrum! Modi neque, distinctio numquam voluptas error
        reprehenderit?
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        minima a natus perferendis quae corrupti, nisi ipsa sed consequatur
        incidunt provident et! Dolorem dolorum quibusdam nihil ducimus earum a
        quam?
      </Typography>
    </div>
  );
};
