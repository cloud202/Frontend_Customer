import {configureStore} from "@reduxjs/toolkit"
import dueDiligenceReducer from '../features/formData/dueDiligenceForm'

export const store = configureStore({
    reducer: dueDiligenceReducer
})