const publications = [
  {
    title: "SonicGauss: Interactive Position-aware Impact Audio Synthesis for 3D Gaussian Splatting",
    authors: "**Wang Chunshi**, [Li Hongxing](https://github.com/hongxingli319), [Luo Yawei](https://scholar.google.com/citations?user=pnVwaGsAAAAJ)",
    journal: "33rd ACM International Conference on Multimedia (ACMMM), 2025.",
    abstract: "While 3D Gaussian representations (3DGS) have proven effective for modeling the geometry and appearance of objects, their potential for capturing other physical attributes—such as sound—remains largely unexplored. In this paper, we present a novel framework dubbed SonicGauss for synthesizing impact sounds from 3DGS representations by leveraging their inherent geometric and material properties. Specifically, we integrate a diffusion-based sound synthesis model with a PointTransformer-based feature extractor to infer material characteristics and spatial-acoustic correlations directly from Gaussian ellipsoids. Our approach supports spatially varying sound responses conditioned on impact locations and generalizes across a wide range of object categories. Experiments on the ObjectFolder dataset and real-world recordings demonstrate that our method produces realistic, position-aware auditory feedback. The results highlight the framework's robustness and generalization ability, offering a promising step toward bridging 3D visual representations and interactive sound synthesis.",
    links: {
      paper: "#",
      code: "#",
      project: null
    },
    bibtex: `...`
  },
  {
    title: "ParticleGS: Particle-Based Dynamics Modeling of 3D Gaussians for Prior-free Motion Extrapolation",
    authors: "[Quan Jinsheng](https://scholar.google.com/citations?user=hRarFkEAAAAJ), **Wang Chunshi**, [Luo Yawei](https://scholar.google.com/citations?user=pnVwaGsAAAAJ)",
    journal: "arXiv, 2025. (preprint)",
    abstract: "This paper aims to model the dynamics of 3D Gaussians from visual observations to support temporal extrapolation. Existing dynamic 3D reconstruction methods often struggle to effectively learn underlying dynamics or rely heavily on manually defined physical priors, which limits their extrapolation capabilities. To address this issue, we propose a novel dynamic 3D Gaussian Splatting prior-free motion extrapolation framework based on particle dynamics systems. The core advantage of our method lies in its ability to learn differential equations that describe the dynamics of 3D Gaussians, and follow them during future frame extrapolation. Instead of simply fitting to the observed visual frame sequence, we aim to more effectively model the gaussian particle dynamics system. To this end, we introduce a dynamics latent state vector into the standard Gaussian kernel and design a dynamics latent space encoder to extract initial state. Subsequently, we introduce a Neural ODEs-based dynamics module that models the temporal evolution of Gaussian in dynamics latent space. Finally, a Gaussian kernel space decoder is used to decode latent state at the specific time step into the deformation. Experimental results demonstrate that the proposed method achieves comparable rendering quality with existing approaches in reconstruction tasks, and significantly outperforms them in future frame extrapolation. Our code is available at https://github.com/QuanJinSheng/ParticleGS.",
    links: {
      paper: "https://arxiv.org/abs/2505.20270",
      code: "https://github.com/QuanJinSheng/ParticleGS",
      project: null
    },
    bibtex: `@article{quan2025particlegs,
  title={ParticleGS: Particle-Based Dynamics Modeling of 3D Gaussians for Prior-free Motion Extrapolation},
  author={Quan, Jinsheng and Wang, Chunshi and Luo, Yawei},
  journal={arXiv preprint arXiv:2505.20270},
  year={2025}
}`
  },
  {
    title: "CrossMatch: Enhance Semi-Supervised Medical Image Segmentation with Perturbation Strategies and Knowledge Distillation",
    authors: "[Zhao Bin*](https://zhaobinnku.github.io), **Wang Chunshi***, Ding Shuxue | *Equal contribution",
    journal: "IEEE Journal of Biomedical and Health Informatics, 2024. (SCI Q1 Top, IF 6.7)",
    abstract: "Semi-supervised learning for medical image segmentation presents a unique challenge of efficiently using limited labeled data while leveraging abundant unlabeled data. Despite advancements, existing methods often do not fully exploit the potential of the unlabeled data for enhancing model robustness and accuracy. In this paper, we introduce CrossMatch, a novel framework that integrates knowledge distillation with dual perturbation strategies, image-level and feature-level, to improve the model's learning from both labeled and unlabeled data. CrossMatch employs multiple encoders and decoders to generate diverse data streams, which undergo self-knowledge distillation to enhance the consistency and reliability of predictions across varied perturbations. Our method significantly surpasses other state-of-the-art techniques in standard benchmarks by effectively minimizing the gap between training on labeled and unlabeled data and improving edge accuracy and generalization in medical image segmentation. The efficacy of CrossMatch is demonstrated through extensive experimental validations, showing remarkable performance improvements without increasing computational costs.",
    links: {
      paper: "https://doi.org/10.1109/JBHI.2024.3463711",
      code: "https://github.com/AiEson/CrossMatch.git",
      project: null
    },
    bibtex: `@article{zhao2024crossmatch,
  title={CrossMatch: Enhance Semi-Supervised Medical Image Segmentation with Perturbation Strategies and Knowledge Distillation},
  author={Zhao, Bin and Wang, Chunshi and Ding, Shuxue},
  journal={IEEE Journal of Biomedical and Health Informatics},
  year={2024},
  publisher={IEEE}
}`
  },
  {
    title: "CycleMatch: Cyclic pseudo-labeling distillation in semi-supervised medical image segmentation",
    authors: "**Wang Chunshi***, Xiong Chuan*, [Zhao Bin](https://zhaobinnku.github.io), Ding Shuxue | *Equal contribution",
    journal: "Pattern Recognition Letters, 2025. (SCI Q2, IF 3.9)",
    abstract: "In this study, we present a semi-supervised medical image segmentation framework called CycleMatch, which aims to tackle the dependency of fully supervised methods on a large amount of labeled data. By integrating a cyclic pseudo-label distillation mechanism with image-level and feature-level perturbations, CycleMatch effectively leverages unlabeled data to enhance model performance and robustness. Experimental results demonstrate that CycleMatch outperforms existing semi-supervised methods across various data annotation ratios, particularly excelling in scenarios with limited labeled data. Additionally, an in-depth analysis of feature perturbation types and parameter choices further validates CycleMatch's effectiveness and adaptability in handling different medical image datasets. Overall, CycleMatch offers a new solution for medical image segmentation, showcasing the potential for achieving efficient and accurate segmentation even with limited data.",
    links: {
      paper: "https://doi.org/10.1016/j.patrec.2025.04.014",
      code: null,
      project: null
    },
    bibtex: `@article{wang2025cyclematch,
  title={CycleMatch: Cyclic pseudo-labeling distillation in semi-supervised medical image segmentation},
  author={Wang, Chunshi and Xiong, Chuan and Zhao, Bin and Ding, Shuxue},
  journal={Pattern Recognition Letters},
  year={2025},
  publisher={Elsevier}
}`
  },
  {
    title: "DistillMatch: Revisiting Self-Knowledge Distillation in Semi-Supervised Medical Image Segmentation",
    authors: "**Wang Chunshi**, Zhao Bin, Liu Zhiyang",
    journal: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM), 2024.",
    abstract: "Semi-supervised medical image segmentation still faces challenges although it is able to obtain better segmentation results using a small amount of labeled data and a large amount of unlabeled data. Despite the progress made by current methods in utilizing unlabeled data, they fail to exploit the full potential of labeled data in terms of improving model performance. In this paper, we propose a semi-supervised segmentation method, DistillMatch, that incorporates knowledge distillation and feature perturbation, which efficiently transfers knowledge between labeled and unlabeled data, thus making full use of the information of labeled data to improve segmentation results. DistillMatch consists of several key components: the Self-Training process based on knowledge distillation and feature perturbation, the Deterministic Knowledge Transfer (DKT) strategy, and the introduction of Teacher Assistant (TA), which work together to optimize model performance. Extensive experiments on two benchmark datasets demonstrate that our method outperforms the current state-of-the-art (SOTA) approaches, especially in terms of edge accuracy and model generalization capabilities. We also show how this performance improvement can be achieved without sacrificing computational efficiency through an effective multi-decoder implementation strategy. These experimental results not only demonstrate the effectiveness of our approach, but also highlight its practical value in medical image segmentation tasks.",
    links: {
      paper: "https://doi.org/10.1109/BIBM62325.2024.10821816",
      code: "https://github.com/AiEson/DistillMatch.git",
      project: null
    },
    bibtex: `@inproceedings{wang2024distillmatch,
  title={DistillMatch: Revisiting Self-Knowledge Distillation in Semi-Supervised Medical Image Segmentation},
  author={Wang, Chunshi and Zhao, Bin and Liu, Zhiyang},
  booktitle={2024 IEEE International Conference on Bioinformatics and Biomedicine (BIBM)},
  pages={3778--3783},
  year={2024},
  organization={IEEE}
}`
  },
  {
    title: "SymMatch: Symmetric Bi-Scale Matching with Self-Knowledge Distillation in Semi-Supervised Medical Image Segmentation",
    authors: "**Wang Chunshi***, Teng Shougan*, Sun Shaohua*, [Zhao Bin](https://zhaobinnku.github.io) | *Equal contribution",
    journal: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM), 2024.",
    abstract: "With the development of medical image segmentation technology, high-quality automatic segmentation methods, particularly within semi-supervised learning frameworks, have become a research hotspot. This study introduces a new semi-supervised medical image segmentation algorithm called SymMatch. The algorithm effectively leverages limited labeled data along with a large amount of unlabeled data through a symmetrical network structure and knowledge distillation techniques. SymMatch applies a spectrum of perturbations, from weak to strong, at both image and feature levels, effectively leveraging the potential of unlabeled data. Additionally, by incorporating a bi-scale distillation loss, the model's robustness and accuracy in handling complex medical imaging data are further enhanced. Experimental results show that SymMatch demonstrates superior performance across multiple recognized medical imaging datasets (such as ACDC, LA and PanNuke). Notably, even with very limited labeled data, it maintains high segmentation accuracy. These achievements not only advance the development of semi-supervised medical image segmentation technology but also provide new ideas and methods for future research in related technologies.",
    links: {
      paper: "https://doi.org/10.1109/BIBM62325.2024.10822040",
      code: "https://github.com/AiEson/SymMatch.git",
      project: null
    },
    bibtex: `@inproceedings{wang2024symmatch,
  title={SymMatch: Symmetric Bi-Scale Matching with Self-Knowledge Distillation in Semi-Supervised Medical Image Segmentation},
  author={Wang, Chunshi and Teng, Shougan and Sun, Shaohua and Zhao, Bin},
  booktitle={2024 IEEE International Conference on Bioinformatics and Biomedicine (BIBM)},
  pages={2562--2569},
  year={2024},
  organization={IEEE}
}`
  },
  {
    title: "SCANet: Split Coordinate Attention Network for Building Footprint Extraction",
    authors: "**Wang Chunshi**, [Zhao Bin](https://zhaobinnku.github.io), Ding Shuxue",
    journal: "International Conference on Neural Information Processing (ICONIP'24)",
    abstract: "Building footprint extraction holds immense significance in remote sensing image analysis and has great value in urban planning, land use, environmental protection and disaster assessment. Despite the progress made by conventional and deep learning approaches in this field, they continue to encounter significant challenges. This paper introduces a novel plug-and-play attention module, Split Coordinate Attention (SCA), which ingeniously captures spatially remote interactions by employing two spatial range of pooling kernels, strategically encoding each channel along x and y planes, and separately performs a series of split operations for each feature group, thus enabling more efficient semantic feature extraction. By inserting into a 2D CNN to form an effective SCANet, our SCANet outperforms recent SOTA methods on the public Wuhan University (WHU) Building Dataset and Massachusetts Building Dataset in terms of various metrics. Particularly SCANet achieves the best IoU, 91.61% and 75.49% for the two datasets.",
    links: {
      paper: "https://doi.org/10.1007/978-981-96-6594-5_8",
      code: "https://github.com/AiEson/SCANet.git",
      project: null
    },
    bibtex: `@inproceedings{wang2024scanet,
  title={SCANet: Split Coordinate Attention Network for Building Footprint Extraction},
  author={Wang, Chunshi and Zhao, Bin and Ding, Shuxue},
  booktitle={International Conference on Neural Information Processing},
  pages={93--105},
  year={2024},
  organization={Springer}
}`
  },
  {
    title: "A Novel Two-Stage Approach for 3D Dental Tooth Instance Segmentation",
    authors: "Chen Yuhan, **Wang Chunshi**, [Zhao Bin](https://zhaobinnku.github.io)",
    journal: "MICCAI 2024 Workshop",
    abstract: "Tooth CBCT instance segmentation is a foundational step in advancing digital dental health systems, with the precision of tooth segmentation playing a critical role in accurate medical diagnosis. Deep learning based methods face significant challenges in accurately locating and classifying teeth in 3D dental images, especially given the complex anatomical structures present in CBCT scans. Additionally, manually identifying and labeling each tooth from these scans is an extremely time-consuming and burdensome task for medical professionals. To address these issues, in this paper, we propose a two-stage semi-supervised method for tooth instance segmentation, along with innovative data preprocessing. Our method achieves a distinguished fourth place on the validation set of the “MICCAI STS 2024 Challenge Task 2”, outperforming other mainstream semi-supervised methods. Code for this implementation is made available at https://github.com/magic-fortune/MICCAI2024.",
    links: {
      paper: "https://link.springer.com/chapter/10.1007/978-3-031-88977-6_18",
      code: "https://github.com/magic-fortune/MICCAI2024.git",
      project: "https://www.codabench.org/competitions/3025/"
    },
    bibtex: `@inproceedings{chen2025novel,
  title={A Novel Two-Stage Approach for 3D Dental Tooth Instance Segmentation},
  author={Chen, Yuhan and Wang, Chunshi and Zhao, Bin},
  booktitle={International Conference on Medical Image Computing and Computer-Assisted Intervention},
  pages={188--199},
  year={2025},
  organization={Springer}
}`
  },
  {
    title: "STS MICCAI 2023 Challenge: Grand challenge on 2D and 3D semi-supervised tooth segmentation",
    authors: "Wang Yaqi, Zhang Yifan, Chen Xiaodiao, ..., **Wang Chunshi**, et al.",
    journal: "arXiv preprint, 2024.",
    abstract: "Computer-aided design (CAD) tools are increasingly popular in modern dental practice, particularly for treatment planning or comprehensive prognosis evaluation. In particular, the 2D panoramic X-ray image efficiently detects invisible caries, impacted teeth and supernumerary teeth in children, while the 3D dental cone beam computed tomography (CBCT) is widely used in orthodontics and endodontics due to its low radiation dose. However, there is no open-access 2D public dataset for children's teeth and no open 3D dental CBCT dataset, which limits the development of automatic algorithms for segmenting teeth and analyzing diseases. The Semi-supervised Teeth Segmentation (STS) Challenge, a pioneering event in tooth segmentation, was held as a part of the MICCAI 2023 ToothFairy Workshop on the Alibaba Tianchi platform. This challenge aims to investigate effective semi-supervised tooth segmentation algorithms to advance the field of dentistry. In this challenge, we provide two modalities including the 2D panoramic X-ray images and the 3D CBCT tooth volumes. In Task 1, the goal was to segment tooth regions in panoramic X-ray images of both adult and pediatric teeth. Task 2 involved segmenting tooth sections using CBCT volumes. Limited labelled images with mostly unlabelled ones were provided in this challenge prompt using semi-supervised algorithms for training. In the preliminary round, the challenge received registration and result submission by 434 teams, with 64 advancing to the final round. This paper summarizes the diverse methods employed by the top-ranking teams in the STS MICCAI 2023 Challenge.",
    links: {
      paper: "https://arxiv.org/abs/2407.13246",
      code: null,
      project: "https://sts-challenge.github.io/"
    },
    bibtex: `@article{wang2024sts,
  title={STS MICCAI 2023 Challenge: Grand challenge on 2D and 3D semi-supervised tooth segmentation},
  author={Wang, Yaqi and Zhang, Yifan and Chen, Xiaodiao and Wang, Shuai and Qian, Dahong and Ye, Fan and Xu, Feng and Zhang, Hongyuan and Zhang, Qianni and Wu, Chengyu and others},
  journal={arXiv preprint arXiv:2407.13246},
  year={2024}
}`
  },
  {
    title: "DCA-Net: Data-Driven Collaborative Assistance Network for Semi-supervised Medical Segmentation",
    authors: "Chen Yuhan*, **Wang Chunshi***, [Zhao Bin](https://zhaobinnku.github.io) | *Equal contribution",
    journal: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM), 2024.",
    abstract: "In this paper, we focus on the empirical alignment challenge between labeled and unlabeled data in semi-supervised medical image segmentation. When labeled and unlabeled data are poorly aligned, the network struggles to fully leverage knowledge from the labeled data. To address this, we propose an efficient and streamlined approach called \"DCA-Net\", which integrates a frequency-domain data augmentation module Style Transfer Module (STM) and Bidirectional Copy-Paste (BCP) to effectively reduce the distribution gap between labeled and unlabeled data. Additionally, we combine knowledge distillation with semi-supervised learning to encourage deeper feature learning and more stable model behavior. Experiments with DCA-Net on the LA and ACDC datasets achieve state-of-the-art (SOTA) results.",
    links: {
      paper: "https://doi.org/10.1109/BIBM62325.2024.10821880",
      code: null,
      project: null
    },
    bibtex: `@inproceedings{chen2024dca,
  title={DCA-Net: Data-Driven Collaborative Assistance Network for Semi-supervised Medical Segmentation},
  author={Chen, Yuhan and Wang, Chunshi and Zhao, Bin},
  booktitle={2024 IEEE International Conference on Bioinformatics and Biomedicine (BIBM)},
  pages={1430--1437},
  year={2024},
  organization={IEEE}
}`
  },
  {
    title: "A multi-stage framework for 3D individual tooth segmentation in dental CBCT",
    authors: "**Wang Chunshi**, [Zhao Bin](https://zhaobinnku.github.io), Ding Shuxue",
    journal: "MICCAI Challenge on Semi-supervised Tooth Segmentation, 2023.",
    abstract: "Cone beam computed tomography (CBCT) is a common way of diagnosing dental related diseases. Accurate segmentation of 3D tooth is of importance for the treatment. Although deep learning based methods have achieved convincing results in medical image processing, they need a large of annotated data for network training, making it very time-consuming in data collection and annotation. Besides, domain shift widely existing in the distribution of data acquired by different devices impacts severely the model generalization. To resolve the problem, we propose a multi-stage framework for 3D tooth segmentation in dental CBCT, which achieves the third place in the “Semi-supervised Teeth Segmentation” 3D (STS-3D) challenge. The experiments on validation set compared with other semi-supervised segmentation methods further indicate the validity of our approach.",
    links: {
      paper: "https://arxiv.org/abs/2407.10433",
      code: null,
      project: null
    },
    bibtex: `@incollection{wang2023multi,
  title={A multi-stage framework for 3d individual tooth segmentation in dental CBCT},
  author={Wang, Chunshi and Zhao, Bin and Ding, Shuxue},
  booktitle={MICCAI Challenge on Semi-supervised Tooth Segmentation},
  pages={36--45},
  year={2023},
  publisher={Springer Nature Switzerland Cham}
}`
  },
  {
    title: "Rib fracture segmentation based on 3D FM-UNet",
    authors: "[Zhao Bin](https://zhaobinnku.github.io), Yang Ting, Xin Zhaowei, **Wang Chunshi**",
    journal: "Proceedings of the 2023 4th International Symposium on Artificial Intelligence, 2023.",
    abstract: "Computed tomography (CT) scanning is a common method for diagnosing rib fractures. However, the shape of the fracture region obtained from CT image segmentation seriously affects the clinician's diagnosis. To solve this problem, we propose a segmentation network (3D FM-UNet) to segment CT images to obtain more accurate regions of rib fractures. The experiments show that our 3D FM-UNet achieves an average mean Dice score of 0.5452 and an average IoU of 0.3748, which exceeds the comparison methods.",
    links: {
      paper: "https://doi.org/10.1145/3644116.3644132",
      code: null,
      project: null
    },
    bibtex: `@inproceedings{zhao2023rib,
  title={Rib fracture segmentation based on 3d fm-unet},
  author={Zhao, Bin and Yang, Ting and Xin, Zhaowei and Wang, Chunshi},
  booktitle={Proceedings of the 2023 4th international symposium on artificial intelligence for medicine science},
  pages={80--83},
  year={2023}
}`
  }
];

export default publications;
