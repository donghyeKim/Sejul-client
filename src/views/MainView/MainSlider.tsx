import React, { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Logo, Card, CircularImage } from '../../components';
import './scss/MainCommon.scss';
import { ISummary } from '../../api/interfaces/ISummary';
// TODO
// 소요시간
interface MainSliderProps {
	children?: ReactNode;
	className?: string;
	onClick?: Function;
	data: ISummary[];
}

const MainSlider = (props: MainSliderProps) => {
	const { data, className, onClick } = props;

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<>
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className="main-slider"
				containerClass="container-with-dots"
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite
				itemClass="main-slider-item"
				keyBoardControl
				minimumTouchDrag={80}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 3,
						partialVisibilityGutter: 40,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 1,
						partialVisibilityGutter: 30,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 2,
						partialVisibilityGutter: 30,
					},
				}}
				showDots={true}
				sliderClass="main-slider-track"
				slidesToSlide={1}
				swipeable
			>
				{data.length >= 0 ? (
					data.map((item: ISummary) => (
						<Card onClick={() => {}}>
							{item.user === undefined || item.user === null ? (
								<div className="main-slider-author">
									<CircularImage className="main-slider-author-profile" />
									아무개
								</div>
							) : (
								<div className="main-slider-author">
									<CircularImage className="main-slider-author-profile" url={item.user.profile} />
									{item.user.username}
								</div>
							)}
							<div className="main-slider-article-title">{item.article.title}</div>
							{/* 해시태그 */}
							<div className="main-slider-hashtags">
								{item.hashtags.map((hashtag) => (
									<p className="main-slider-hashtags-text">#{hashtag.text}</p>
								))}
							</div>
							{/* 소요시간 */}

							{/* 작성시간 */}
						</Card>
					))
				) : (
					<p className="main-slider-placeholder">등록된 질문이 없습니다</p>
				)}
			</Carousel>
		</>
	);
};

export default MainSlider;
