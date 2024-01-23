interface CommentProps {
  username: string;
  comment : string;

}

const Comment: React.FC<CommentProps> = ({username, comment}) => {

  return (
    <div className="flex-col py-3 px-4">
        <h5 className='text-gray-600'>{username}</h5>
        <p className=''>{comment}</p>
    </div>
  );
};

export default Comment;