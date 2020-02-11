const rows = [
  {
    id: 1,
    source: "https://cloudstor.aarnet.edu.au/plus/s/hsP33Yb69uvEfXY",
    name:
      "QUT Redlands Weeds Dataset",
    description: "A diverse dataset of 4 different weed species collected in Queensland Australia. Data is split in to 4 parts: Session 1, Session 2, Merged Training, Merged Testing. The dataset accompanies the following paper: \"David Hall, Feras Dayoub, Tristan Perez, Chris McCool. 2018. A rapidly deployable classification system using visual data for the application of precision weed management\"",
    author: "",
    data_type: "RGB images",
    num_of_images: "830 images",
    num_of_plants: "830",
    num_of_species: "4 (cotton, feathertop, sowthistle, wild oats)",
    data_source:
      "Images were taken from the Agbot II robotic platform traveling over a controlled field using a downwards facing IDS UI-1240SE 1.3 MP global shutter camera. Data collected at a rate of 5 Hz with each image covering approximately 1 square meter area.",
    location: "Queensland Government Department of Agriculture and Fisheries' Redlands Research Station, Australia.",
    condition_of_use:
      "The dataset can be used freely for non-commercial applications.",
    manually_labelled: "yes",
    citation: [
      "David Hall, Feras Dayoub, Tristan Perez, Chris McCool. 2017. A transplantable system for weed classification by agricultural robotics",
      "David Hall, Feras Dayoub, Jason Kulk, Chris McCool. 2017. Towards unsupervised weed scouting for agricultural robotics",
      "Hall, David R. 2018. A rapidly deployable approach for automated visual weed classification without prior species knowledge."
    ]
  },
  {
    id: 2,
    source: "https://github.com/cwfid/dataset",
    name: "A crop/Weed Field dataset",
    description: "The Crop/Weed Field Image Dataset (CWFID) comprises field images, vegetation segmentation masks and crop/weed plant type annotations, and accompanies the following publication: \"Sebastian Haug, Jörn Ostermann: A Crop/Weed Field Image Dataset for the Evaluation of Computer Vision Based Precision Agriculture Tasks, CVPPP 2014 Workshop, ECCV 2014\".",
    author: "Haug, Sebastian and Ostermann",
    data_type: "RGB images",
    num_of_images: "60 images",
    num_of_plants: "n/a",
    num_of_species: "1 (carrot)",
    data_source: "autonomous field robot Bonirob",
    location: "an organic farm in Germany",
    condition_of_use: "only be used for non-commercial research ",
    manually_labelled: "yes",
    citation: [
      "Dheeman Saha. 2019. Development of Enhanced Weed Detection System with Adaptive Thresholding , K-Means and Support Vector Machine",
      "Subbian Umamaheswari, Rahul Arjun, D. Meganathan. 2018. Weed Detection in Farm Crops using Parallel Image Processing",
      "Dheeman Saha, Austin Hanson, Sung Y. Shin. 2016. Development of Enhanced Weed Detection System with Adaptive Thresholding and Support Vector Machine",
      "Mads Dyrmann. 2015. Fuzzy C-means based plant segmentation with distance dependent threshold",
      "Mulham Fawakherji, Ali Youssef, Domenico Daniele Bloisi, Alberto Pretto, Daniele Nardi. 2019. Crop and Weeds Classification for Precision Agriculture Using Context-Independent Pixel-Wise Segmentation",
      "Radhika Kamath, Mamatha Balachandra, Srikanth Prabhu. 2019. Raspberry Pi as Visual Sensor Nodes in Precision Agriculture: A Study",
      "Anders Krogh Mortensen, Søren Skovsen, Henrik Karstoft, René Gislum . 2019. The Oil Radish Growth Dataset for Semantic Segmentation and Yield Estimation",
      "Yanlei Xu, Zongmei Gao, Lav R. Khot, Xiaotian Meng, Qin Zhang. 2018. A Real-Time Weed Mapping and Precision Herbicide Spraying System for Row Crops",
      "Tatiana M. Pinho, João Paulo Coelho, Josenalde Oliveira, José Boaventura-Cunha. 2018. An Overview on Visual Sensing for Automatic Control on Smart Farming and Forest Management"
    ]
  },
  {
    id: 3,
    source: "https://github.com/AlexOlsen/DeepWeeds",
    name: "DeepWeeds",
    description: "The DeepWeeds dataset is a popular Australian weed dataset for the work, \"2019. DeepWeeds: A Multiclass Weed Species Image Dataset for Deep Learning\". It consists of 17,509 images capturing eight different weed species native to Australia in situ with neighbouring flora. In our work, the dataset was classified to an average accuracy of 95.7% with the ResNet50 deep convolutional neural network.",
    author: "Alex Olsen, Dmitry A. Konovalov, Bronson Philippa, Peter Ridd, Jake C. Wood, Jamie Johns, Wesley Banks, Benjamin Girgenti, Owen Kenny, James Whinney, Brendan Calvert, Mostafa Rahimi Azghadi & Ronald D. White", 
    data_type: "colour images",
    num_of_images: "17509 images",
    num_of_plants: "n/a",
    num_of_species:
      "8 (native to Australia:  Chinee apple, Snake weed, Lantana, Prickly acacia, Siam weed, Parthenium, Rubber vine and Parkinsonia)",
    data_source: "ground vehicle with camera attached",
    location:
      "across Queensland (Black River, Charters Towers, Cluden, Douglas, Hervey Range, Kelso, McKinlay and Paluma)",
    condition_of_use: "publicly available (free to use)",
    manually_labelled: "yes",
    citation: [
      "Olsen, A., Konovalov, D.A., Philippa, B. et al. 2018. DeepWeeds: A Multiclass Weed Species Image Dataset for Deep Learning.",
      "Corey Lammie, Alex Olsen, Tony Carrick, Mostafa Rahimi Azghadi. 2019. Low-Power and High-Speed Deep FPGA Inference Engines for Weed Classification at the Edge",
      "Ł Chechliński, B Siemiątkowska, M Majewski - Sensors. 2019. A System for Weeds and Crops Identification—Reaching over 10 FPS on Raspberry Pi with the Usage of MobileNets, DenseNet and Custom Modifications",
      "Alessandrodos Santos Ferreira, Daniel MatteFreitas, Gercina Gonçalvesda Silva, Hemerson Pistori, Marcelo Theophilo Folhesc. 2019. Unsupervised deep learning and semi-automatic data labeling in weed discrimination",
      "Stavros G. Vougioukas, Spyros Fountas. 2019. Smart automation in the agri-food chain : State of the art , prospects and impacts on workforce demands"
    ]
  },
  {
    id: 4,
    source: "https://www.kaggle.com/gavinarmstrong/open-sprayer-images/data",
    name: "A collection of broad leaved dock images for weed sprayer",
    description: "The data set includes pictures of broad leaved docks and picture of the land without broad leaved docks. The dataset is orginally created to develop an open sourced autonomous land drone that will propel itself across the fields spraying weeds it can see with its mounted cameras.",
    author: "Gavin  Armstrong",
    data_type: "colour images",
    num_of_images: "6697 images",
    num_of_plants: "n/a",
    num_of_species: "1 (broad leaved docks)",
    data_source: "Lane drone with mounted camera",
    location: "unknown",
    condition_of_use: "free to use (open sourced)",
    manually_labelled: "yes",
    citation: ["Gavin Armstrong. 2017. The One Sprayer project"]
  },
  {
    id: 5,
    source: "https://vision.eng.au.dk/plant-seedlings-dataset/",
    name: "Plant Seedlings Dataset",
    description: "The Plant Seedlings Dataset contains images of approximately 960 unique plants belonging to 12 species at several growth stages. The database have been recorded at Aarhus University Flakkebjerg Research station in a collaboration between University of Southern Denmark and Aarhus University, originalled published in the paper \"A Public Image Database for Benchmark of Plant Seedling Classification Algorithms\" in 2016.",
    author: "Giselsson, Thomas Mosgaard and Dyrmann, Mads and Jorgensen, Rasmus Nyholm and Jensen, Peter Kryger and Midtiby, Henrik Skov",
    data_type: "RGB images ",
    num_of_images: "9.7GB of images",
    num_of_plants: "960",
    num_of_species:
      "12 (maze, common wheat, sugar beet, scentless mayweed, common chickweed, shepherd’s purse, cleavers, charlock, fat hen, small-flowered cranesbill, black-grass, loose silky-bent)",
    data_source: "Ground cameras",
    location: "Denmark",
    condition_of_use: "free to use",
    manually_labelled: "yes",
    citation: [
      "Thomas Mosgaard Giselsson, Rasmus Nyholm Jørgensen, Peter Kryger Jensen, Mads Dyrmann, Henrik Skov Midtiby. 2016. A Public Image Database for Benchmark of Plant Seedling Classification Algorithms",
      "Carlos A. Mamani Diaz, Edgar E. Medina Castaneda, Carlos A. Mugruza Vassallo. 2019. Deep Learning for Plant Classification in Precision Agriculture.",
      "Catherine R. Alimboyong, Alexander A. Hernandez. 2019. An Improved Deep Neural Network for Classification of Plant Seedling Images",
      "Heba Ahmed Elnemr. 2019. Convolutional Neural Network Architecture for Plant Seedling Classification",
      "Catherine R. Alimboyong, Alexander A. Hernandez, Ruji P. Medina. 2018. Classification of Plant Seedling Images Using Deep Learning",
      "Daniel K. Nkemelu, Daniel Omeiza, Nancy Lubalo. 2018. Deep Convolutional Neural Network for Plant Seedlings Classification",
      "Mads Dyrmann. 2017. Automatic Detection and Classification of Weed Seedlings under Natural Light Conditions"
    ]
  },
  {
    id: 6,
    source: "https://plantvision.unl.edu/dataset",
    name: "UNL Plant Phenotyping Dataset A: Oanicoid Phenomap-1",
    description: "This dataset consists of imaging data from 31 diverse maize inbreds as well as a number of representative genotypes from other panicoid grain crops. Plants were imaged once per day using the UNL Lemnatec Scanalyzer 3D. The dataset contains high resolution RGB photos taken from the top, front, and side (90 degree rotation) for 176 total plants on from 2 days after planting to 28 days after planting.",
    author: "The Plant Vision Initiative",
    data_type: "high resolution RGB photos",
    num_of_images: "95.9GB of images",
    num_of_plants: "176",
    num_of_species: "31 different maize inbreds",
    data_source: "UNL Lemnatec Scanalyzer 3D",
    location: "USA",
    condition_of_use: "free to use",
    manually_labelled: "yes",
    citation: [
      "Sruti Das Choudhury, Saptarsi Goswami, Srinidhi Bashyam, Ashok Samal, Tala Awada. 2017. Automated Stem Angle Determination for Temporal Plant Phenotyping Analysis",
      "Jin-Gang Yu, Zhikai Liang, James C. Schnable, Ashok Sama, Vincent Stoerger, Sruti Das Choudhury. 2016. Automated Vegetative Stage Phenotyping Analysis of Maize Plants using Visible Light Images",
      "Ashok Samal, Tala Awada, Sruti Das Choudhury, Srinidhi Bashyam, Yumou Qiu. 2018. Holistic and component plant phenotyping using temporal image sequence",
      "Sruti Das Choudhury, Ashok Samal, and Tala Awada. 2019. Leveraging Image Analysis for High-Throughput Plant Phenotyping"
    ]
  },
  {
    id: 7,
    source: "https://plantvision.unl.edu/dataset",
    name:
      "UNL Plant Phenotyping Dataset B: Component Plant Phenotyping Dataset (UNL-CPPD)",
    description: "This dataset consists of images of 13 maize plants for the two views: side view 0 degree and side view 90 degree. Plants were imaged once per day using the visible light camera of the UNL Lemnatec Scanalyzer 3D high throughput phenotyping facility. The dataset contains original images, groundtruth and annotated images to facilitate research advancements in the filed of componenet phenotyping analysis.",
    author: "The Plant Vision Initiative",
    data_type: "high resolution RGB photos",
    num_of_images: "7.2GB of images",
    num_of_plants: "13",
    num_of_species: "1 (maize plant)",
    data_source: "UNL Lemnatec Scanalyzer 3D",
    location: "USA",
    condition_of_use: "free to use",
    manually_labelled: "yes",
    citation: [
      "Ashok Samal, Tala Awada, Sruti Das Choudhury, Srinidhi Bashyam, Yumou Qiu. 2018. Holistic and component plant phenotyping using temporal image sequence",
      "Sruti Das Choudhury, Ashok Samal, and Tala Awada. 2019. Leveraging Image Analysis for High-Throughput Plant Phenotyping"
    ]
  },
  {
    id: 8,
    source: "https://plantvision.unl.edu/dataset",
    name: "UNL 3D Plant Phenotyping Dataset C: (UNL-3DPPD)",
    description: "This dataset consists of images of 20 maize plants & 20 sorghum plants for the 10 views: side views 0 degree, 36 degree, ..., and 244 degree. Plants were imaged once per day using the visible light camera of the UNL Lemnatec Scanalyzer 3D high throughput phenotyping facility. The dataset contains original images, groundtruth and annotated images to facilitate research advancements in the filed of componenet phenotyping analysis",
    author: "The Plant Vision Initiative",
    data_type: "high resolution RGB photos",
    num_of_images: "49.6GB of images",
    num_of_plants: "40",
    num_of_species: "2 (maize plants and sorghum plants",
    data_source: "UNL Lemnatec Scanalyzer 3D",
    location: "USA",
    condition_of_use: "free to use",
    manually_labelled: "yes",
    citation: [
      "Sruti Das Choudhury, Ashok Samal, and Tala Awada. 2019. Leveraging Image Analysis for High-Throughput Plant Phenotyping",
    ]
  },
  {
    id: 9,
    source: "https://github.com/lameski/rgbweeddetection",
    name:
      "Weed detection dataset with RGB images taken under variable light conditions",
    description: "A dataset of RGB images from carrot seedlings with weeds (Carrot-Weed dataset) taken from farms near Negotino, Macedonia. The dataset was published in: Petre Lameski, Eftim Zdravevski, Vladimir Trajkovik, Andrea Kulakov. 2017. \"Weed detection dataset with RGB images taken under variable light conditions\"",
    author: "Petre Lameski, Eftim Zdravevski, Vladimir Trajkovik, Andrea Kulakov",
    data_type: "RGB images",
    num_of_images: "39 images",
    num_of_plants: "more than 100",
    num_of_species: "1 (carrot)",
    data_source:
      "taken by a cell phone camera with 10 mega pixels (from 1 meter height). Ground vehicle, under constant light condition with near infrared (NIR) and Red (R) channels",
    location: "Negotino, Republic of Macedonia (in February)",
    condition_of_use:
      "The dataset can be used freely for non-commercial applications",
    manually_labelled: "yes",
    citation: [
      "Petre Lameski, Eftim Zdravevski,Vladimir Trajkovik, Andrea Kulakov. 2017. Weed Detection Dataset with RGB Images Taken Under Variable Light Conditions",
      "Eftim Zdravevski. 2017. Parallelization of algorithms for data processing and classification",
      "Petre Lameski. 2017. Plant Species Recognition Based on Machine Learning and Image Processing",
      "Vladimir Trajkovik, Eftim Zdravevski, Petre Lameski, Andrea Kulakov. 2018. Cloud based Data Acquisition and Annotation Architecture for Weed Control",
      "Nicolás Corti, Florian Brunner, Simon Baier, Juergen Geist. 2018. Quantification of Extent, Density, and Status of Aquatic Reed Beds Using Point Clouds Derived from UAV–RGB Imagery",
      "Jane Lameski, Andrej Jovanov, Eftim Zdravevski, Petre Lameski, S. Gievska. 2019. Skin lesion segmentation with deep learning"
    ]
  },
  {
    id: 10,
    source: "https://data.mendeley.com/datasets/3fmjm7ncc6/2",
    name:
      "Weed Detection in Soybean Crops",
    description: "From the set of images captured by the UAV, all those with occurrence of weeds were selected resulting a total of 400 images. Through the Pynovisão software, using the SLIC algorithm, these images were segmented and the segments annotated manually with their respective class. These segments were used in the construction of the image dataset.",
    author: "Alessandro dos Santos Ferreira, Hemerson Pistori, Daniel Matte Freitas and Gercina Gonçalves da Silva",
    data_type: "RGB images",
    num_of_images: "400 images",
    num_of_plants: "n/a",
    num_of_species: "3 (soybean, grass, broadleaf)",
    data_source:
      "taken by unmanned aerial vehicles",
    location: "Brazil",
    condition_of_use:
      "free to use",
    manually_labelled: "yes",
    citation: [
      "Alex Olsen, Dmitry Konovalov, Bronson Philippa, Ron D White. 2018. DeepWeeds: A Multiclass Weed Species Image Dataset for Deep Learning",
      "Saad Abouzahir, Mohamed Sadik, Essaid Sabir. 2018. Enhanced Approach for Weeds Species Detection Using Machine Vision",
      "Shaun M. SharpeArnold W. Schumann, Jialin Yu, Nathan S. Boyd. Vegetation detection and discrimination within vegetable plasticulture row-middles using a convolutional neural network",
      "Mamadou Dian Bah, Adel Hafiane, R. Canals. 2018. Deep Learning with Unsupervised Data Labeling for Weed Detection in Line Crops in UAV Images",
      "Corey LammieTony Carrick, Mostafa Rahimi Azghadi, Alex Olsen. 2019. Low-Power and High-Speed Deep FPGA Inference Engines for Weed Classification at the Edge",
      "Alwaseela Abdalla, Haiyan Cen, Liang Wan, Leon He. 2019. Fine-tuning convolutional neural network with transfer learning for semantic segmentation of ground-level oilseed rape images in a field with high weed pressure"
    ]
  },
  {
    id: 11,
    source: "http://www.dis.uniroma1.it/~labrococo/fds/syntheticdatasets.html",
    name:
      "Synthetic Datasets",
    description: "A collection of real and synthetic weeds images. The dataset accompanies the following paper: \"Maurilio Di Cicco, Ciro Potena, Giorgio Grisetti and Alberto Pretto. 2017. Automatic Model Based Dataset Generation for Fast and AccurateCrop and Weeds Detection.\"",
    author: "Maurilio Di Cicco, Ciro Potena, Giorgio Grisetti and Alberto Pretto.",
    data_type: "RGB images",
    num_of_images: "869M of images",
    num_of_plants: "n/a",
    num_of_species: "3 (sugarbeet, Galium Aparinae weeds, Capsella Bursa Pastoris weeds",
    data_source:
      "ground vehicle with camera attached",
    location: "Italia",
    condition_of_use:
      "free to use",
    manually_labelled: "yes",
    citation: [
      "Nan Li, Xiaoguang Zhang, Chunlong Zhang, Xinyu Wu. 2019. Real-time crop recognition in transplanted fields with prominent weed growth: a visual-attention-based approach",
      "Jose Pena, Yumin Tan, Wuttichai Boonpook. 2019. Semantic Segmentation Based Remote Sensing Data Fusion on Crops Detection",
      "Lars Grimstad, Remy Zakaria, Tuan Dung Le, Pål Johan From. 2018. A Novel Autonomous Robot for Greenhouse Applications",
      "Aichen Wang, Wen Zhang, Xinhua Wei. 2019. A review on weed detection using ground-based machine vision and image processing techniques"
    ]
  },
];

export default rows;
