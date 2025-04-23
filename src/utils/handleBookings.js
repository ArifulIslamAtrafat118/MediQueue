import toast, { Toaster } from "react-hot-toast"; 

export const getDataFromDB =() =>{
 let bookedDoctors = JSON.parse(localStorage.getItem("bookedDoctors"))|| [];
//  console.log(bookedDoctors);
return bookedDoctors;
}

export const addToDB = id => {
    // console.log(id);
    let bookedDoctors = getDataFromDB();
 if(bookedDoctors.includes(id)){
    toast.error("appointment already scheduled for today!");
 }else{
    bookedDoctors.push(id);
    localStorage.setItem("bookedDoctors", JSON.stringify(bookedDoctors));
    toast.success("Booking successful");
 }
};

export const removeFromDB =(id) =>{
let bookedDoctors = getDataFromDB();
const setBookedDoctors =bookedDoctors.filter(item=>item!==id)
localStorage.setItem("bookedDoctors", JSON.stringify(setBookedDoctors));

console.log(setBookedDoctors);
}
