import { TabPanel } from "@material-tailwind/react";
import React from "react";

const ToyReview = ({ singleToy }) => {
    const commentTime = new Date().toLocaleDateString()
    const commentDate = new Date().toLocaleTimeString()
    const commmentTime = {
        commentDate,commentTime
    }
    const [comments,refetch,loading] = useComment()
  const handleComment = async (e) => {
    e.preventDefault();
    if (!user) {
      return toast.error("Please Login first!");
    } else {
      const form = e.target;
      const commentUserName = form.commentUserName.value;
      const commentUserComment = form.commentUserComment.value;
    //   console.log(value)
      const info = {
          comment: commentUserComment,
          commentUser: commentUserName,
          userEmail: user?.email,
          userNaem: user?.displayName,
          userPhoto: user?.photoURL,
          commentCount: parseFloat(value),
          commentID: course?._id,
          timeDate: commmentTime 
      };
// console.log(info)
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/comments`,
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
          toast.success(`comments successfull`);
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
      <div className="min-h-[200px]"></div>
    </TabPanel>
  );
};

export default ToyReview;
