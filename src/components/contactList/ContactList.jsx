import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RiContactsLine } from 'react-icons/ri';

import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { Button, Item, List, Text, Spinner } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Spinner />}

      {/* якщо немає контактів і не йде загрузка і не виникла помилка */}
      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}

      {/* якщо виникла помилка */}
      {error && <Text>{error}</Text>}
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <RiContactsLine size={20} />
            <Text>
              {name}: {number}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};
