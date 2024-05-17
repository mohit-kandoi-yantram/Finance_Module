import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import InputForm from './form';
import { RxCross2 } from 'react-icons/rx';

import React from 'react';

export default function Popup(props) {
  const { title, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} fullWidth maxWidth="sm">
      <DialogTitle className="flex justify-end">
        <RxCross2 onClick={() => setOpenPopup(false)} />
      </DialogTitle>
      <DialogContent dividers>
        <InputForm setOpenPopup={setOpenPopup} />
      </DialogContent>
    </Dialog>
  );
}
