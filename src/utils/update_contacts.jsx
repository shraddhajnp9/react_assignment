// utils.js (Create a new file for utility functions)

// Function to update the contacts array based on the incoming message
export function updateContacts_on_new_message(prevContacts, message, chat_open) {
  const matchedContactIndex = prevContacts.findIndex(
    (contact) => contact.id === message.chat_id
  );

  if (matchedContactIndex !== -1) {
    // Create a copy of the current contacts array
    const updatedContacts = [...prevContacts];

    // Remove the matched contact from its current position in the array
    const matchedContact = updatedContacts.splice(matchedContactIndex, 1)[0];

    const contactUpdates = {
      unread_msg_count: chat_open? 0: (matchedContact.unread_msg_count + 1),
      last_msg: message.last_msg,
      last_msg_sent_received: message.last_msg_sent_received,
      last_msg_type: message.last_msg_type,
      last_msg_status: message.last_msg_status,
      last_msg_time: message.last_msg_time,
      last_msg_title: message.last_msg_title,
      last_msg_wamid: message.last_msg_wamid,
    };

    if(message.company_name) {
      contactUpdates.company_name = message.company_name;
    }
    if(message.cp_name_1) {
      contactUpdates.cp_name_1 = message.cp_name_1;
    }
    if(message.phone_1) {
      contactUpdates.phone_1 = message.phone_1;
    }
    if(message.phone_2) {
      contactUpdates.phone_2 = message.phone_2;
    }
    if(message.email_1) {
      contactUpdates.email_1 = message.email_1;
    }
    if(message.email_2) {
      contactUpdates.email_2 = message.email_2;
    }
    if(message.enquiries_count) {
      contactUpdates.enquiries_count = message.enquiries_count;
    }
    if(message.orders_count) {
      contactUpdates.orders_count = message.orders_count;
    }
    if(message.quotation_status) {
      contactUpdates.quotation_status = message.quotation_status;
    }
    if(message.order_status) {
      contactUpdates.order_status = message.order_status;
    }
    if(message.display_name) {
      contactUpdates.display_name = message.display_name;
    }


    // Update the unread_msg_count for the matched contact
    const updatedContact = { 
      ...matchedContact, 
      ...contactUpdates,
    };

    // Add the updated contact to the beginning of the array
    updatedContacts.unshift(updatedContact);

    // Return the updated contacts array
    return updatedContacts;
  } else {
    // If the matched contact is not found, create a new contact object
    const newContact = {
      id: message.chat_id,
      unread_msg_count: message.unread_msg_count || 1,
      last_msg: message.last_msg,
      last_msg_sent_received: message.last_msg_sent_received,
      last_msg_type: message.last_msg_type,
      last_msg_status: message.last_msg_status,
      last_msg_time: message.last_msg_time,
      last_msg_title: message.last_msg_title,
      last_msg_wamid: message.last_msg_wamid,
      display_name: message.display_name,
      extra_1: null,
      orders_count: message.orders_count || 0,
      enquiries_count: message.enquiries_count || 0,
      last_enquiry_id: message.last_enquiry_id,
      label: null,
      dp: null,
      company_name: message.company_name,
      cp_name_1: message.cp_name_1,
      phone_1: message.phone_1,
      phone_2: message.phone_2,
      email_1: message.email_1,
      email_2: message.email_2,
      quotation_status: message.quotation_status,
      order_status: message.order_status,
    };
    // console.log(newContact);

    // Add the new contact to the beginning of the array
    prevContacts.unshift(newContact);

    // Return the updated contacts array with the new contact added

    // console.log(prevContacts);
    return prevContacts;
  }
}
