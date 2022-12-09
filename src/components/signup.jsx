// import { useState } from "react";
// import { Dialog } from "@headlessui/react";

// export default function SignUpForm(){
//     let [isOpen, setIsOpen] = useState(false)

//     return (
//         <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
//             <Dialog.Panel>
//                 <Dialog.Title className="font-semibold text-3xl mt-10">Sign Up</Dialog.Title>
//                     <p className="text-slate-400 text-sm">Create a new account</p>
//                     <form>
//                         <label htmlFor="firstName" className="block font-semibold">First Name</label>
//                         <input type="text" name='firstName' id='firstName' className="block my-4 rounded-md h-12 border-loginborder" />
//                         <label htmlFor="lastName" className="block font-semibold">Last Name</label>
//                         <input type="text" name='lastName' id='lastName' className="block my-4 rounded-md h-12 border-loginborder" />
//                         <label htmlFor="signUpEmail" className="block font-semibold">Student Email</label>
//                         <input type="email" name='signUpEmail' id='signUpEmail' className="block my-4 rounded-md h-12 border-loginborder" />
//                         <label htmlFor="signUpPassword" className="block font-semibold">Password</label>
//                         <input type="password" name="signUpPassword" id='signUpPassword' className="block my-4 rounded-md h-12 border-loginborder" />
//                         <button type="submit" className="bg-primary font-semibold text-lg text-white py-3 rounded-md w-full mt-10">Cancel</button>
//                         <button type="submit" className="bg-primary font-semibold text-lg text-white py-3 rounded-md w-full mt-10">Sign Up</button>
//                     </form>
//             </Dialog.Panel>
//         </Dialog>
//     )
// }