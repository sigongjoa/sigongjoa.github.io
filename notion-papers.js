// Notion API 연동으로 논문 데이터 가져오기
const NOTION_TOKEN = 'YOUR_NOTION_TOKEN';
const PAPERS_DATABASE_ID = '1bcb12db-772c-8092-bd3c-f624587d52b2';

const paperLinks = {
    'ai-avatar': 'https://drive.google.com/file/d/1AbE9BEIcq2wZM5zOBO7iB_ZOmP58ZVHw/view?usp=drive_link',
    'signal-monitoring': 'https://drive.google.com/file/d/1R9yiqBvH8l3IdFxR_-VwVtC0BAByUytA/view?usp=drive_link',
    'imu-gaussian': 'https://drive.google.com/file/d/1pY1lZEFLhJ0HrMuC4fqfqG8tPT2WtTtX/view?usp=sharing',
    'imu-fault': 'https://drive.google.com/file/d/1JmW59dmnnYGz7AttwBFiyJVffw_ruTkK/view?usp=drive_link',
    'emergency-prediction': 'https://drive.google.com/file/d/1Unu8OufdHN3V63Z9EKAGBkVdLukdzv5Y/view?usp=sharing',
    'skin-analysis': 'https://drive.google.com/file/d/137UIjv5VCyW0d5_Nw_qtKqZ_FTMbm1Sr/view?usp=sharing'
};

async function loadNotionPapers() {
    const papers = [
        {
            id: 'imu-gaussian',
            title: '다중 태스크 희소 가우시안 프로세스를 이용한 IMU 센서의 성능 저하 예측',
            venue: '임베디드공학회 추계학술대회',
            year: '2024',
            description: '제한된 시험 데이터를 활용하여 유도무기 시스템의 IMU 센서 성능 저하를 예측하는 희소 가우시안 프로세스 기반의 새로운 접근법',
            link: paperLinks['imu-gaussian']
        },
        {
            id: 'imu-fault',
            title: '소량의 시험 데이터를 이용한 IMU 불량검출 및 잔여유효수명 예측',
            venue: '임베디드공학회 추계학술대회',
            year: '2024',
            description: '제한된 학습 데이터와 높은 정밀도 요구사항을 가진 IMU 센서의 불량 탐지 및 잔여수명 예측을 위한 고도화된 머신러닝 기법',
            link: paperLinks['imu-fault']
        },
        {
            id: 'emergency-prediction',
            title: '시공간 데이터 학습을 이용한 딥러닝 모델 기반 교통사고 위험 예측',
            venue: '응급의학회지',
            year: '2023',
            description: '강원도 응급서비스 데이터를 활용한 교통사고 위험 예측을 위한 시공간 딥러닝 모델에 대한 포괄적인 연구',
            link: paperLinks['emergency-prediction']
        },
        {
            id: 'skin-analysis',
            title: '모공 및 주름 분할 기반 얼굴 피부 분석',
            venue: '화장품과학회지',
            year: '2024',
            description: '모공 및 주름 탐지를 위한 사용자 정의 손실 함수를 적용한 EfficientUnet을 사용한 자동화된 얼굴 피부 분석의 새로운 컴퓨터 비전 접근법',
            link: paperLinks['skin-analysis']
        },
        {
            id: 'signal-monitoring',
            title: '신호 분해 기반 설비 상태 모니터링 성능 향상',
            venue: '산업공학회지',
            year: '2024',
            description: 'TFT 모델 성능 향상을 위한 FFT, EEMD, EMD, VMD 등 신호 분해 기법 비교 연구',
            link: paperLinks['signal-monitoring']
        },
        {
            id: 'ai-avatar',
            title: 'AI 기반 데이터 수집 및 모델링 프로젝트',
            venue: 'Stable Diffusion 아바타 생성 시스템',
            year: '2024',
            description: 'Stable Diffusion 모델을 활용한 게임 아바타 자동 생성 및 VAE 기반 유사도 분석을 통한 추천 시스템 개발',
            link: paperLinks['ai-avatar']
        }
    ];
    
    return papers;
}

function openPaper(url) {
    window.open(url, '_blank');
    console.log(`논문 PDF 열기: ${url}`);
}

// 페이지 로드 시 논문 목록 업데이트
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const papers = await loadNotionPapers();
        console.log('논문 데이터 로드 완료:', papers.length);
    } catch (error) {
        console.error('ERROR: 논문 데이터 로드 실패:', error);
    }
});
