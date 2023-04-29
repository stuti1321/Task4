import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const ServerForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const [server, setServer] = useState({
    name: '',
    language: '',
    framework: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(/servers/${id})
        .then(response => setServer(response.data))
