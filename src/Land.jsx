import p1 from "./p1.jpg"
import p2 from "./p2.jpg"
import p3 from "./p3.png"
import p4 from "./p4.png"
import p5 from "./p5.png"
import p6 from "./p6.png"
import p7 from "./p7.png"
import p8 from "./p8.png"
import p9 from "./p9.png"

import { Card } from "flowbite-react";
import { List } from "flowbite-react";
export default function Land() {
  return (
    <div className="">
      <div className="header pb-10">
        <h3 className="text-3xl text-center font-bold ">
        Nhận diện cảm xúc mặt và các ứng dụng xoay quanh nó
        </h3>
      </div>
      <div className="main">
        <div className="intro">
          <h4 className="text-2xl text-left font-medium">I.Giới thiệu sơ lược về nhận diện cảm xúc mặt</h4>
          <div className="p-3 text-sm grid grid-rows-1 grid-cols-2 gap-5">
              <div className="">
                   <p>Khuôn mặt con người là công cụ truyền tải cảm xúc mạnh mẽ và tự nhiên, cho phép chúng ta thể hiện suy nghĩ và trạng thái tâm lý mà không cần sử dụng ngôn từ. Đây là hình thức giao tiếp phi ngôn ngữ phổ quát, có khả năng vượt qua mọi rào cản về ngôn ngữ, văn hóa và địa lý. Việc nhận diện và phân tích cảm xúc khuôn mặt tự động đã trở thành một lĩnh vực nghiên cứu đầy hấp dẫn và thử thách, với những tác động sâu rộng đến nhiều khía cạnh của cuộc sống hiện đại. Cảm xúc được truyền tải qua khuôn mặt chiếm phần lớn trong giao tiếp của con người, với 93% cảm xúc được thể hiện thông qua ngôn ngữ cơ thể và biểu cảm khuôn mặt. Khả năng máy tính nhận diện và phản hồi lại những cảm xúc này tương tự như cách con người giao tiếp với nhau, đã mở ra nhiều tiềm năng ứng dụng trong các lĩnh vực khác nhau. Từ nghiên cứu, các nhà khoa học đã xác nhận rằng các biểu hiện cảm xúc trên khuôn mặt là bẩm sinh và phổ quát, tồn tại trong mọi chủng tộc, giới tính và lứa tuổi. Trong số đó, bảy cảm xúc cơ bản được nhận diện gồm: trung tính, giận dữ, ghê tởm, sợ hãi, hạnh phúc, buồn bã và ngạc nhiên. Công nghệ nhận diện cảm xúc qua khuôn mặt đang ngày càng được quan tâm và ứng dụng rộng rãi trong nhiều lĩnh vực khác nhau, từ chăm sóc sức khỏe, giáo dục, cho đến marketing và giải trí.</p>
              </div>
              <Card className="max-w-3xl rounded-sm" imgSrc={p1} horizontal>
                  <h5 className="text-sm font-light tracking-tight text-gray-900 dark:text-white text-center">
                       Khuôn mặt của mỗi người sẽ thể hiện ra cảm xúc khác nhau
                  </h5>
              </Card>
          </div>

        </div>
        <div className="overview">
          <h4 className="text-2xl text-left font-medium pb-3">II.Tống quan về các phương pháp nhận diện khuôn mặt</h4>
          <p className="pl-3">Các phương pháp nhận diện cảm xúc khuôn mặt chủ yếu được chia thành hai nhóm chính: các phương pháp dựa trên đặc trưng thủ công và các phương pháp dựa trên học sâu. </p>
          <div className="pl-3">
            <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white ">  1.Các phương pháp truyền thống</h5>
            <List className="pl-3 font-normal ">
              <List.Item className="pb-2"><span className="font-medium text-lg">- Phân tích hình dạng và hình học(Geometric-Based Methods):</span><br></br> Các phương pháp này tập trung vào việc phân tích hình dạng và vị trí của các điểm đặc trưng trên khuôn mặt như mắt, mũi, miệng, và lông mày. Các điểm này sau đó được sử dụng để tính toán các đặc trưng hình học, ví dụ như khoảng cách giữa hai mắt hoặc độ cong của miệng, để xác định cảm xúc.</List.Item>
              <img src={p2} alt="" className="max-w-sm m-auto ml-auto mr-auto" />
              <List.Item><span className="font-medium text-lg">-Phân tích kết cấu (Appearance-Based Methods):</span> <br />Các phương pháp này dựa trên việc phân tích kết cấu của bề mặt khuôn mặt bằng cách sử dụng các kỹ thuật như Histogram of Oriented Gradients (HOG), Local Binary Patterns (LBP), hoặc Gabor wavelets. Những đặc trưng kết cấu này sau đó được đưa vào các mô hình phân loại như Support Vector Machines (SVM) hoặc K-Nearest Neighbors (KNN) để nhận diện cảm xúc.</List.Item>
              <div className="grid grid-cols-3 pt-4 gap-5">
                <img src={p3} alt="" className="max-w-sm m-auto ml-auto mr-auto gap-10" />
                <img src={p4} alt="" className="max-w-sm m-auto ml-auto mr-auto" />
                <img src={p5} alt="" className="max-w-sm m-auto ml-auto mr-auto" />
              </div>

            </List>
          </div>
          <div >
          <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white pb-5  ">  2.Các phương pháp sử dụng machine learning</h5>
          <p className="pl-3 pb-3">Với sự phát triển của trí tuệ nhân tạo, các phương pháp học sâu ngày càng chiếm ưu thế nhờ khả năng tự động trích xuất đặc trưng và xử lý lượng dữ liệu lớn một cách hiệu quả. Các phương pháp nhận diện cảm xúc mặt bằng machine learning thường được áp dụng là: </p>
            <List className="pl-3  font-normal ">
              

              <List.Item className="pb-20">
                <div className="grid grid-cols-2 gap-5">
                <p className="border p-10 rounded-md border-2">
                <span className="font-medium text-lg "> - Mạng nơ-ron tích chập (Convolutional Neural Networks - CNNs):</span><br></br> CNNs là loại mô hình deep learning phổ biến nhất trong xử lý ảnh và nhận diện cảm xúc khuôn mặt. CNNs có khả năng tự động học các đặc trưng không gian từ dữ liệu hình ảnh thông qua các lớp tích chập (convolutional layers). CNNs bao gồm nhiều lớp khác nhau như lớp tích chập, lớp pooling (lớp giảm mẫu), và lớp fully connected (lớp kết nối đầy đủ). Các lớp tích chập và pooling có khả năng trích xuất các đặc trưng cục bộ từ hình ảnh, trong khi các lớp fully connected giúp phân loại cảm xúc dựa trên các đặc trưng đã học. Transfer Learning là một kỹ thuật quan trọng trong deep learning, nơi một mô hình CNN đã được huấn luyện trên một tập dữ liệu lớn (như ImageNet) có thể được tinh chỉnh (fine-tuned) cho nhiệm vụ nhận diện cảm xúc khuôn mặt. Transfer learning giúp giảm thời gian huấn luyện và cải thiện độ chính xác khi dữ liệu huấn luyện hạn chế.
                  </p>
                  <img src={p6} alt="" className="max-w-xl  " />
                </div>
              </List.Item>

              <List.Item className="pb-20">
                <div className="grid grid-cols-2 gap-5 ">
                <img src={p7} alt="" className="max-w-xl " />
                <p className="border p-10  rounded-md border-2"><span className="font-medium text-lg"> - Mạng nơ-ron tái hồi (Recurrent Neural Networks - RNNs): </span> <br />RNNs, đặc biệt là Long Short-Term Memory (LSTM) và Gated Recurrent Unit (GRU), thường được sử dụng khi xử lý dữ liệu tuần tự như video hoặc các chuỗi biểu cảm khuôn mặt. RNNs có khả năng nhớ thông tin từ các bước trước đó, giúp phân tích cảm xúc liên tục theo thời gian.
                  
                  </p>
              </div>
              </List.Item>
              <List.Item className="pb-20">
              <div className="grid grid-cols-2 gap-5">
                  <p className="border p-10 rounded-md border-2"> <span className="font-medium text-lg"> -Mô hình kết hợp (Hybrid Models): </span> <br />Mô hình kết hợp thường là sự kết hợp giữa CNNs và RNNs để tận dụng ưu điểm của cả hai loại mạng nơ-ron. CNN được sử dụng để trích xuất đặc trưng không gian từ các khung hình, sau đó các đặc trưng này được đưa vào RNN hoặc LSTM để xử lý thông tin thời gian, giúp nhận diện cảm xúc trong các chuỗi hình ảnh động.
                    {"\n\n\n"}
                  </p>
                  <img src={p8} alt="" className="max-w-xl " />
                </div></List.Item>
              <List.Item>
              <img src={p9} alt="" className="max-w-xl " />
              <p className="border p-10 rounded-md border-2"> 
                  <span className="font-medium text-lg"> -Mạng nơ-ron đối kháng sinh (Generative Adversarial Networks - GANs): </span> <br />GANs là một loại mô hình deep learning mạnh mẽ, bao gồm hai mạng nơ-ron: một mạng sinh (generator) tạo ra các mẫu dữ liệu giả và một mạng phân biệt (discriminator) phân biệt giữa dữ liệu thật và giả. GANs được sử dụng trong nhận diện cảm xúc khuôn mặt để tạo ra các hình ảnh khuôn mặt với các biểu cảm khác nhau, giúp tăng cường tập dữ liệu huấn luyện và cải thiện hiệu suất của các mô hình nhận diện cảm xúc.
                  </p></List.Item>
       
            </List>
          </div>
        </div>
      </div>
    </div>
  );
  }