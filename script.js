const body = document.body





const main_div = document.createElement("div")
body.prepend(main_div)


const email_label = document.createElement("label")
email_label.setAttribute("for", 'email_name')
email_label.innerHTML = "Email"
email_label.style.color = "grey"



const email_input = document.createElement("input")
main_div.prepend(email_input)
email_input.setAttribute("id","email")
email_input.setAttribute("placeholder","don@gmail.com")
email_input.style.padding = "0.8rem 8.5rem 0.8rem 1rem"
email_input.style.borderRadius = "5px"
email_input.before(email_label)
email_input.style.display = "block"
email_input.style.marginBottom = "2rem"


const pass_label = document.createElement("label")
pass_label.setAttribute("for","pass_name")
pass_label.innerHTML = "Password"
pass_label.style.color = "grey"


const pass_input = document.createElement("input")
email_input.after(pass_input)
pass_input.setAttribute("id","password")
pass_input.setAttribute("placeholder","baran12345")
pass_input.style.padding = "0.8rem 8.5rem 0.8rem 1rem"
pass_input.style.borderRadius = "5px"
pass_input.before(pass_label)
pass_input.style.display = "block"

 
const block_link = document.createElement("div")
pass_input.after(block_link)
block_link.style.margin = "1rem 0"
block_link.style.width = "320px"
block_link.style.display = "flex"
block_link.style.justifyContent = "space-between"

const block_chek = document.createElement("div")
block_link.prepend(block_chek)




const check_input = document.createElement("input")
check_input.setAttribute("type",'checkbox')
block_chek.prepend(check_input)


const chect_text = document.createElement("label")
chect_text.innerHTML = "Remeber me"
check_input.after(chect_text)
chect_text.style.fontWeight = "600"


const link = document.createElement("a")
block_link.append(link)
link.innerHTML = "Forgot Password?"
link.style.color = "red"
link.style.fontWeight = 650





const btn = document.createElement("button")
block_link.after(btn)
btn.style.width = "320px"
btn.style.height = "40px"
btn.style.border = "0"
btn.style.borderRadius = "10px"
btn.style.backgroundColor = "blue"
btn.innerHTML = "Sign up"
btn.style.color = "white"
btn.style.fontSize = "15px"




const sc_form = document.createElement("div")
main_div.after(sc_form)
sc_form.style.marginTop = "50px"


const sc_text1 = document.createElement("label")
sc_text1.innerHTML = "Name:"
sc_form.prepend(sc_text1)
sc_text1.style.display = "block"


const sc_input1 = document.createElement("input")
sc_input1.setAttribute("placeholder","name")
sc_text1.after(sc_input1)
sc_input1.style.padding = "0.8rem 8.5rem 0.8rem 1rem"
sc_input1.style.borderRadius = "5px"

const sc_text2 = document.createElement("label")
sc_text2.innerHTML = "Number:"
sc_input1.after(sc_text2)
sc_text2.style.display = "block"


const sc_input2 = document.createElement("input")
sc_input2.setAttribute("placeholder","number")
sc_text2.after(sc_input2)
sc_input2.style.padding = "0.8rem 8.5rem 0.8rem 1rem"
sc_input2.style.borderRadius = "5px"

const sc_text3 = document.createElement("label")
sc_text3.innerHTML = "Email:"
sc_input2.after(sc_text3)
sc_text3.style.display = "block"


const sc_input3 = document.createElement("input")
sc_input3.setAttribute("placeholder","email")
sc_text3.after(sc_input3)
sc_input3.style.padding = "0.8rem 8.5rem 0.8rem 1rem"
sc_input3.style.borderRadius = "5px"


const sc_text4 = document.createElement("label")
sc_text4.innerHTML = "Sum:"
sc_input3.after(sc_text4)
sc_text4.style.display = "block"


const sc_input4 = document.createElement("input")
sc_input4.setAttribute("placeholder","sum")
sc_text4.after(sc_input4)
sc_input4.style.padding = "0.8rem 8.5rem 0.8rem 1rem"
sc_input4.style.borderRadius = "5px"
sc_input4.style.display = "block"

const sc_btn = document.createElement("button")
sc_input4.after(sc_btn)
sc_btn.style.width = "200px"
sc_btn.style.height = "40px"
sc_btn.style.border = "0"
sc_btn.style.borderRadius = "4px"
sc_btn.style.backgroundColor = "red"
sc_btn.innerHTML = "Go to the payment"
sc_btn.style.color = "white"
sc_btn.style.fontSize = "15px"
sc_btn.style.marginTop = "20px"




































































































































































