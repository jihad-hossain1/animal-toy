import { TabPanel } from "@material-tailwind/react";
import { useReview } from "../../../../hooks/useReview";
import { useContext } from "react";
import { AuthContext } from "../../../../authentication/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const ToyReview = ({ singleToy }) => {
  const {user} = useContext(AuthContext)
  // to get local time 
    const reviewDate = new Date().toLocaleDateString()
    const reviewTime = new Date().toLocaleTimeString()
    const reviewTimes = {
        reviewDate,reviewTime
    }
    // custom hook
    const [reviews,refetch,loading,isError] = useReview()
    // rating picker 
    const [value, setValue] = useState(0);
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    // handle submited review section
  const handleReview = async (e) => {
    e.preventDefault();
    if (!user) {
      return toast.error("Please Login first!");
    } else {
      const form = e.target;
      const reviewUserName = form.reviewUserName.value;
      const reviewUserreview = form.reviewUserreview.value;
    //   console.log(value)
      const info = {
          review: reviewUserreview,
          reviewUser: reviewUserName,
          userEmail: user?.email,
          userNaem: user?.displayName,
          userPhoto: user?.photoURL,
          reviewCount: parseFloat(value),
          reviewID: course?._id,
          timeDate: reviewTimes 
      };
// console.log(info)
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/reviews`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          }
        );
        const data = await res.json();
          console.log(data)
        if (data) {
          toast.success(`reviews successfull`);
          refetch()
          form.reset()
        }
      } catch (error) {
        console.log(error);
        toast.error(`${error}`);
      }
    }
  };

  return (
    <TabPanel value={"review"} >
      <Toaster />
      <div className="min-h-[200px]">
        {/* comment or review section  */}
        <hr className='py-4' />
        <div className=''>
          <h4 className='text-blue-gray-600 font-semibold px-2'>
            Leave a comments..
          </h4>
          <form
            onSubmit={handleReview}
            action=''
            className='max-w-[450px] px-2 py-2'
          >
           <span>
           <Rate tooltips={desc} onChange={setValue} allowHalf className="mb-2" defaultValue={course?.instructorRating} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
           </span>
            <div className='mb-3'>
              <Input
                required
                name='commentUserName'
                label='Your Name'
                color='teal'
              ></Input>
            </div>
            <Textarea
              required
              name='commentUserComment'
              label='Leave a comments'
              color='teal'
            ></Textarea>
            <Button label='' color='teal' type='submit'>
              submit
            </Button>
          </form>
        </div>
        <hr className='py-4' />
        <div className={`${comment.length > 0 ? 'border border-cyan-50 p-4 rounded text-blue-gray-700 grid gap-3' : 'text-blue-gray-600'}`}>
            {comment.length > 0 ? comment.map(item=><SingleComment item={item} key={item._id} refetch={refetch}></SingleComment>) : 'Ops No comments here..' }
        </div>
      </div>
    </TabPanel>
  );
};

export default ToyReview;
