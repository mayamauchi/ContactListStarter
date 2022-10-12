import React from 'react';


const ContactList = (props) => {
    const contacts = props.contacts
    return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {
        contacts.map((element) => {
            console.log(element)
            return( 
                <ContactRow key={element.id}>
                <td>{element.name}</td>
                <td>{element.phone}</td>
                <td>{element.email}</td>
                </ContactRow>)
        })
    }
        </tbody>
    </table>
        
      );
}
export default ContactList;