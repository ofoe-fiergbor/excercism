import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Display } from "./components/display/Display";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import ApiService from "./domain/api/ApiService";
import { setLoading, setTracks, setMyTracksAndTestimonials } from "./domain/redux/appSlicer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTracks();
    fetchTestimonials()
  }, []);

  const fetchTestimonials = async() => {
    dispatch(setLoading(true))
    const {data, status, message} = await ApiService.getTestimonials();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      // console.log(data.testimonials)
      dispatch(setMyTracksAndTestimonials(data.testimonials));
    }
    dispatch(setLoading(false));
  }

  const fetchTracks = async () => {
    dispatch(setLoading(true));
    const { data, status, message } = await ApiService.getTracks();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      // console.log(data.tracks)
      dispatch(setTracks(data.tracks));
    }
    dispatch(setLoading(false));
  };

  return (
    <div className="app">
      <Navbar />
      <Header />
      <Display />
    </div>
  );
}

export default App;
