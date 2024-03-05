import {create} from "zustand";
import dayjs from "dayjs";


const initialState = {
    source_location: "",
    destination_location: "",
    oneway: true,
    load : true,
    space: true,
    travel_details: {
      numbers: {
        adult: 1,
        child: 0,
        infant: 0,
      },
      class: "economy",
    },
    date_of_journey: dayjs().format("YYYY-MM-DD") ,
};
  

const useJourneyDetailStore = create((set) => ({
    // questions: [...questionsTable] ,
    // setQuestions: (question) => set({ questions: question}), 

    journeyDetails: initialState ,
    setJourneyDetails:(details)=>set({journeyDetails:details}),


    
}));
  
export default useJourneyDetailStore;
  