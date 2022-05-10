const ImageInput = document.getElementById('MainFormImage')
ImageInput.addEventListener('change', () => {
  let FilePath = ImageInput.value
  let FileName = FilePath.split(/(\\|\/)/g).pop()
  if (FilePath.length) {
    document.getElementById('MainFormImageWrapper').innerText = FileName
  } else {
    document.getElementById('MainFormImageWrapper').innerText = "Select Image"
  }
})

const Form = document.getElementById('MainForm')

const ShowMessage = (InputElement, Message, Success) => {
  const MessageElement = InputElement.parentElement.querySelector(".Message")
  MessageElement.innerHTML = Message
  const Class = (Success ? "Success" : "Error")
  MessageElement.className = `${Class} Message`
  return Success
}
const ShowSuccess = (InputElement) => {
  return ShowMessage(InputElement, "", true) //Success
}
const ShowError = (InputElement, Message) => {
  return ShowMessage(InputElement, Message, false) //Error
}
const HasValue = (InputElement, Message) => {
  if (InputElement.value === "") {
    return ShowError(InputElement, Message)
  }
  return ShowSuccess(InputElement)
}

const ValidateEmail = (InputElement, InvalidMessage) => {
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const Email = InputElement.value
	if (!emailRegex.test(Email)) {
    return ShowError(InputElement, InvalidMessage)
  }
  return true
}



//these are the only required ones
const REQUIRED_MESSAGES = {
  FirstName: "Please enter your first name",
  LastName: "Please enter your last name",
  Email: "Please enter your email",
  Image: "Please upload an image",
}
const INVALID_MESSAGES = {
  Email: "Please enter a valid email",
}

Form.addEventListener('submit', (event) => {
  event.preventDefault()

  const Elements = Form.elements
  let AnyIsEmpty = false
  let EmailIsEmpty = false
  for (Element of Elements) {
    const REQUIRED_MESSAGE = REQUIRED_MESSAGES[Element.getAttribute('name')]
    //if it exists in the required messages array - not all are required
    if (REQUIRED_MESSAGE) {
      if (!HasValue(Element, REQUIRED_MESSAGE)) {
        AnyIsEmpty = true
        if (Element.getAttribute('name') == "Email") {
          EmailIsEmpty = true
        }
      }
    }
  }
  if (!EmailIsEmpty) {
    if (!ValidateEmail(Elements['Email'], INVALID_MESSAGES['Email'])) {
      return false
    }
  }
  if (AnyIsEmpty) {
    return false
  }

  const Popup = document.getElementById("MainPopup")
  const TextToPopup = (Value) => {
    Popup.querySelector('#MainPopupText').innerHTML = Value
  }

  const FirstName = Elements['FirstName'].value
  const LastName = Elements['LastName'].value
  const Email = Elements['Email'].value
  const Message = Elements['Message'].value
  TextToPopup(`Hello ${FirstName} ${LastName}! We will send a verification
  email to ${Email} soon okay? We have also received your message - which says the following "${Message}"`)

  const Image = Elements['Image']
  const ImageOutput = document.getElementById('MainPopupImage')
  ImageOutput.src = URL.createObjectURL(Image.files[0])

  Popup.hidden = false
  Popup.querySelector("#MainPopupHide").addEventListener('click', () => {
    Popup.hidden = true
    Popup.qurerySelector('#MainPopupText').innerHTML = ""
  })
  
  Form.reset()
})
