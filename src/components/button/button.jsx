import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ButtonComponent = () => {

  const navigate = useNavigate();

  const handleRedirectHomePage = () => {
      navigate("/");
  };

  return (
    <Box>
      <Button
        className="w-[136px] h-[40px] shadow-light !text-[#121214]"
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={handleRedirectHomePage}
      >
        Back
      </Button>
    </Box>
  );
}

export default ButtonComponent;
