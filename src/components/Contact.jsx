import { useFormValidation } from "../hooks/useFormValidation";
import { HiOutlineMail } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";

export const Contact = ({ language, isDark }) => {
  const {
    formData,
    errors,
    loading,
    sentEmailMessage,
    errorSentEmailMessage,
    handleChange,
    handleSubmit,
  } = useFormValidation({ language });

  return (
    <div
      name="contact"
      className={`w-full h-full   pt-[80px] sm:pt-2 ${!isDark ? "text-gray-700 bg-gray-100" : " text-gray-100 bg-[#262626]"}`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full items-center">
        <div className="inline text-center ">
          <p className={`text-4xl font-bold  border-b-2  inline ${!isDark ? "border-gray-700" : ""}`}>
            {language ? "Contact" : "Contacto"}
          </p>
          <p className="pt-6">
            {language
              ? `Submit the form below or send me an email to:
            diegocattaneo@hotmail.com.ar`
              : `Complete el formulario o envíeme un correo a: diegocattaneo@hotmail.com.ar`}
          </p>
        </div>

        <form
          className="flex flex-col max-w-[600px] w-full pb-8 pt-12 text-center mx-auto text-gray-700"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            type="text"
            placeholder={language ? "Name" : "Nombre"}
            name="username"
            value={formData.username}
            className=" bg-gray-100 p-2 rounded-md focus:outline-none border 
                                  border-slate-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
          />
          <div
            className={`${errors.username ? "visible " : "invisible "
              }   h-[25px]`}
          >
            {" "}
            {errors.username && (
              <span className="text-red-500">{errors.username}</span>
            )}{" "}
          </div>

          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder={language ? "E-mail" : "Correo electrónico"}
            value={formData.email}
            name="email"
            className=" p-2  bg-gray-100 rounded-md border border-slate-300
                                 invalid:border-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500
                                  focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
          />

          <div
            className={`${errors.email ? "visible " : "invisible "}   h-[25px]`}
          >
            {" "}
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}{" "}
          </div>
          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            rows="6"
            placeholder={language ? "Message" : "Mensaje"}
            className="resize-none rounded-md border border-slate-300 focus:outline-none focus:border-gray-500 
                                    focus:ring-1 focus:ring-gray-500 bg-gray-100 p-2"
          ></textarea>
          <div
            className={`${errors.message ? "visible " : "invisible "
              }   h-[25px]`}
          >
            {" "}
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}{" "}
          </div>

          <button
            className={`${!isDark ? "text-gray-700 hover:text-gray-900 border-gray-700 hover:border-gray-950  " : "text-gray-300 hover:text-[#fff]"}  rounded-xl  border-[1px]     
                                    px-6 py-3 my-8 mx-auto flex items-center` }
            disabled={loading}
          >
            {" "}
            {loading
              ? `${language ? "Sending..." : "Enviando..."}`
              : `${language ? "Submit" : "Enviar"}`}
          </button>

          <div
            className={`${sentEmailMessage || errorSentEmailMessage
              ? "visible"
              : "invisible"
              } h-[25px]`}
          >
            {" "}
            {sentEmailMessage && (
              <span className={`${!isDark ? "text-gray-900" : "text-[#fff]"} font-bold`}>
                {language
                  ? "E-mail sent correctly"
                  : "Correo enviado correctamente"}
              </span>
            )}{" "}
            {errorSentEmailMessage && (
              <span className="text-red-500">
                {language
                  ? "An error occurred while sending the email"
                  : "Ha ocurrido un error al enviar el correo"}
              </span>
            )}{" "}
          </div>
        </form>

        {/* Social Mobile Icons */}
        <div className="flex lg:hidden justify-center place-items-center  ">
          <ul className="flex gap-4   justify-center place-items-center  ">
            <li className=" h-[50px] duration-300   flex items-center  ">
              <a
                className={`${!isDark ? "text-gray-700 " : "text-gray-200" }`}
                target="_blank"
                href="https://www.linkedin.com/in/cattaneo-diego"
              >
                <RiLinkedinLine size={20} />
              </a>
            </li>

            <li className=" h-[50px]  duration-300   rounded-md  flex items-center ">
              <a
                className={`${!isDark ? "text-gray-700 " : "text-gray-200" }`}
                target="_blank"
                href="https://github.com/dcattaneo"
              >
                <LuGithub size={20} />
              </a>
            </li>
            <li className="h-[50px]  duration-300   rounded-md  flex items-center ">
              <a
                className={`${!isDark ? "text-gray-700 " : "text-gray-200" }`}
                target="_blank"
                href="mailto:diegocattaneo@hotmail.com.ar"
              >
                <HiOutlineMail size={20} />
              </a>
            </li>
            <li className="h-[50px]  duration-300   rounded-md  flex items-center ">
              <a
                className={`${!isDark ? "text-gray-700 " : "text-gray-200" }`}
                target="_blank"
                href="CV_Cattaneo_Diego.pdf"
                download="CV_Cattaneo_Diego.pdf"
              >
                <MdOutlineFileDownload size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
