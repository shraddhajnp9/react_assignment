import React, { useState } from 'react'
import GlobalContext from './GlobalContext'

const ContextWrapper = (props) => {
  const [totalUnreadMsg, setTotalUnreadMsg] = useState(0)
  const [labels, setLabels] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [showBefore, setShowBefore] = useState('')
  const [openProfile, setOpenProfile] = useState(false)
  const [openInfo, setOpenInfo] = useState(true)
  const [activeChat, setActiveChat] = useState(false)
  const [searchContact, setSearchContact] = useState('')
  const [mobileChatSidebar, setMobileChatSidebar] = useState(false)
  const [profileinfo, setProfileinfo] = useState({})
  const [messFeed, setMessFeed] = useState([])
  const [user, setUser] = useState({})
  const [contacts, setContacts] = useState([])
  const [chats, setChats] = useState([])
  const [activeQtStatus, setActiveQtStatus] = useState(0)
  const [activeOrderStatus, setActiveOrderStatus] = useState(0)
  const [activeLabelStatus, setActiveLabelStatus] = useState({})
  const [enquiryDetails, setEnquiryDetails] = useState(null)
  const [selectedContact, setSelectedContact] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [forwardContacts, setForwardContacts] = useState([])
  const [customMessages, setCustomMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [customers, setCustomers] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [resetMsg, setResetMsg] = useState('')

  return (
    <GlobalContext.Provider
      value={{
        totalUnreadMsg,
        setTotalUnreadMsg,
        labels,
        setLabels,
        isActive,
        setIsActive,
        showBefore,
        setShowBefore,
        openProfile,
        setOpenProfile,
        openInfo,
        setOpenInfo,
        activeChat,
        setActiveChat,
        searchContact,
        setSearchContact,
        mobileChatSidebar,
        setMobileChatSidebar,
        profileinfo,
        setProfileinfo,
        messFeed,
        setMessFeed,
        user,
        setUser,
        contacts,
        setContacts,
        chats,
        setChats,
        activeQtStatus,
        setActiveQtStatus,
        activeOrderStatus,
        setActiveOrderStatus,
        activeLabelStatus,
        setActiveLabelStatus,
        enquiryDetails,
        setEnquiryDetails,
        selectedContact,
        setSelectedContact,
        selectedFile,
        setSelectedFile,
        forwardContacts,
        setForwardContacts,
        customMessages,
        setCustomMessages,
        inputMessage,
        setInputMessage,
        customers,
        setCustomers,
        selectedCustomer,
        setSelectedCustomer,
        resetMsg,
        setResetMsg
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
