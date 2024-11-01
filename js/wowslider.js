
.del-slider 
{
	width: 100%;
	height: auto;
	position: relative;
}

.del-slider > div
{
	width: 100%;
	position: absolute;
}


.del-slider > div:not(:first-child)
{
	opacity: 0;
	display: none;
}


.del-slider > div > div
{
	position: absolute;
}


.del-slider > .del-slider-prev, 
.del-slider > .del-slider-next 
{
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	padding: 1rem 1.2rem;
	margin-top: -22px;
	font-weight: bold;
	font-size: 1.5rem;
	transition: 0.6s ease;
	border-radius: 0 0.4rem 0.4rem 0;
	user-select: none;
}


.del-slider .del-slider-next 
{
	right: 0;
	border-radius: 0.4rem 0 0 0.4rem;
}


.del-slider .del-slider-prev:hover, 
.del-slider .del-slider-next:hover 
{
	background-color: rgba(0,0,0,0.5);
}

.del-slider .del-slider-dots 
{
	position: absolute;
	bottom: 0.8rem;
	width: 100%;
	text-align: center;
}

@media only screen and (max-width: 576px) 
{
	.del-slider .del-slider-dots
	{
		display: none;
	}
}

.del-slider .del-slider-dots .del-slider-dot 
{
	cursor: pointer;
	height: 1rem;
	width: 1rem;
	margin: 0 0.25rem;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
}

.del-slider .del-slider-dots .del-slider-dot.del-slider-dot-active,
.del-slider .del-slider-dots .del-slider-dot:hover
{
	background-color: #717171;
}
