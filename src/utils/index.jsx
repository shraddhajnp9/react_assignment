export const contactLabelColor = (status) => {
  switch (status) {
    case 0:
      return 'bg-gray-500 text-black'
    case 1:
      return 'bg-red-500 text-white'
    case 2:
      return 'bg-green-500 text-white'
    case 3:
      return 'bg-yellow-500 text-white'
    case 4:
      return 'bg-black-500 text-white'
    default:
      return 'hidden'
  }
}

export const qtColor = (status) => {
  switch (Number(status)) {
    case 1:
      // return 'bg-gray-400 text-white'
      return 'my_enq_received'
    case 2:
      return 'bg-red-500 text-white'
    case 3:
      return 'bg-yellow-500 text-white'
    case 4:
      return 'bg-green-500 text-white'
    default:
      return 'hidden'
  }
}

export const orderColor = (status) => {
  switch (Number(status)) {
    case 1:
      return 'bg-yellow-500 text-white'
    case 2:
      return 'bg-green-500 text-white'
    case 3:
      return 'bg-black-500 text-white'
    default:
      return 'hidden'
  }
}

export const statusColor = (status) => {
  switch (status) {
    case 1:
      return 'bg-yellow-500 text-white'
    case 2:
      return 'bg-green-500 text-white'
    case 3:
      return 'bg-black-500 text-white'
    case null:
      return 'hidden'
  }
}

export const statusIcons = (status) => {
  switch (Number(status)) {
    case 1:
      return 'heroicons-outline:arrow-down'
    case 2:
      return 'ph:x'
    case 3:
      return 'mdi:hourglass'
    case 4:
      return 'heroicons-outline:check'
    default:
      break
  }
}

export const ordStatusIcons = (status) => {
  switch (Number(status)) {
    case 1:
      return 'mdi:hourglass'
    case 2:
      return 'heroicons-outline:check'
    case 3:
      return 'ph:x'
    default:
      break
  }
}

export const qtTitle = (status) => {
  switch (Number(status)) {
    case 1:
      return 'Enq. Received'
    case 2:
      return 'Enq. Regretted'
    case 3:
      return 'Quotation Pending'
    case 4:
      return 'Quotation Sent'
    default:
      break
  }
}

export const orderTitle = (status) => {
  switch (Number(status)) {
    case 1:
      return 'Pending'
    case 2:
      return 'Received'
    case 3:
      return 'Lost'
    default:
      break
  }
}

export const sourceName = (id) => {
  switch (id) {
    case '1':
      return 'Indiamart'
    default:
      return ''
  }
}

export const leadTypeName = (code) => {
  switch (code) {
    case 'W':
      return 'Direct'
    case 'P':
      return 'Phone'
    case 'B':
      return 'Buy'
    default:
      return ''
  }
}

export const capitalizedLetter = (string) => {
  if (string.startsWith('cms/')) {
    const filtered = string.slice(4)
    return filtered[0].toUpperCase() + filtered.slice(1)
  } else {
    return string[0].toUpperCase() + string.slice(1)
  }
}
