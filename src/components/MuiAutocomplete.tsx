import { Stack, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

type Skill = {
  id: number;
  label: string;
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node'];

const skillsOptions: Skill[] = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={value}
        freeSolo
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
