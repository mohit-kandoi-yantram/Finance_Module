import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import styled from '@emotion/styled';

const HiddenInput = styled.input`
  display: none;
`;

const CustomButton = styled(Button)`
  // Custom styles for the button if needed
`;

interface FileInputProps {
  onFileSelect: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleButtonClick = () => {
    document.getElementById('file-input')?.click();
  };

  return (
    <div>
      <HiddenInput type="file" id="file-input" onChange={handleFileChange} />
      <CustomButton auto onClick={handleButtonClick}>
        {selectedFile ? `Selected file: ${selectedFile.name}` : 'Choose File'}
      </CustomButton>
    </div>
  );
};

export default FileInput;
