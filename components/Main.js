import * as views from "./views";

export default st => `${views[st.page](st)}`;
