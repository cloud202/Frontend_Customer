// slice : helps to create big object which we export,it link the initial state and reducers. 
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        name: '',
        workloadInScope: 'Select an option',
        cloudApproach: 'Select an option',
        workloadType: [],
        techStack: [],
    }
}

export const dueDiligenceSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        setFormData: (state,action)=>{
            const {field,value} = action.payload;

            if(field==="workloadType" || field==="techStack"){
                const index = state.formData[field].indexOf(value);

                if (index === -1) {
                    state.formData = {
                        ...state.formData,
                        [field]: [...state.formData[field], value],
                    };
                } else {
                    state.formData = {
                        ...state.formData,
                        [field]: state.formData[field].filter(item => item !== value),
                    };
                }
            }
            else {
                state.formData ={
                ...state.formData,
                [field] : value
                }
            }
        },

        resetFormData: (state,action)=>{
            state.formData = initialState.formData
        }
    }
})

export const {setFormData,resetFormData} = dueDiligenceSlice.actions

export default dueDiligenceSlice.reducer 