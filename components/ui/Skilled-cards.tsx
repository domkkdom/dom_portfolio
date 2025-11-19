export default function SkillCard( {
    title,
    desc,
    thumbnail
} : {
    title: string,
    desc: string,
    thumbnail: string
}) {
    return (
      <div>
        <div className="relative z-10 flex items-center gap-6 rounded-3xl bg-[#0f1425] p-6">          
          <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
            <img 
              src={thumbnail}
              className="h-10 w-10"
              alt="Mobile Development Icon"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">
              {title}
            </h2>
            <p className="text-gray-300 mt-1">
              {desc}
            </p>
          </div>
        </div>
      </div>
    );
  }
  