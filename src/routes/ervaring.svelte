 <div class="header">
            <h1>Mijn werk ervaring</h1>
        </div>

        <div class="main-container">
            <div class="ervaring">
                <div class="job">
                    <div class="picture">
                        <img src="src\assets/job/kluisbergen-logo.png" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>Vakantiejob Monitor</p>
                            <p>gemeente, Kluisbergen</p>
                        </div>
                        <div class="tijd">
                            Jul 2016 – Aug 2016
                        </div>
                    </div>
                    <div class="werk">
                        <p>Monitor speelpleinwerking</p>
                        <p>gemeente Kluisbergen</p>
                    </div>
                </div>

                <div class="job">
                    <div class="picture">
                        <img src="src\assets/job/logo-westervier.png" class="jobImg" alt="job">
                    </div>

                    <div class="info-job">
                        <div class="werk">
                            <p>Vakantiejob Logistiek</p>
                            <p>Marialove (Curando), Heestert</p>
                        </div>
                        <div class="tijd">
                            jul 2017- aug 2017
                        </div>
                    </div>
                    <div class="werk">
                        <p>Logistiek</p>
                        <p>Woonzorgcentrum Marialove, Heestert</p>
                    </div>
                </div>

                <div class="job">
                    <div class="picture">
                        <img src="src\assets/job/logo_wienerberger.jpg" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>Vakantiejob Wienerberger</p>
                            <p>Wienerberger, Zonnebeke</p>
                        </div>
                        <div class="tijd">
                            Jul 2018- aug 2021
                        </div>
                    </div>
                    <div class="werk">

                        <p>Ik moest helpen met het maken van SOP's en het ordenen van de oude SOP's en </p>
                    </div>
                </div>

                <div class="job">
                    <div class="picture">
                        <img src="src\assets\job\logo-westervier.png" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>Verpleging</p>
                            <p>Woonzorgcentrum Westervier (Curando), Brugge</p>
                        </div>
                        <div class="tijd">
                            Mei 2021- jun 2021
                        </div>
                    </div>
                    <div class="werk">

                        <p>student (stage opleiding Graduaat verpleegkundige)</p>
                    </div>
                </div>

                <div class="job">
                    <div class="picture">
                        <img src="src\assets/job/Az-logo.png" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>Verpleging</p>
                            <p>Az Damiaan, Oostende</p>
                        </div>
                        <div class="tijd">
                            Sep 2021 – okt 2021
                        </div>
                    </div>
                    <div class="werk">
                        <p>student (stage opleiding Graduaat verpleegkundige)</p>
                    </div>
                </div>

                <div class="job">
                    <div class="picture">
                        <img src="src\assets/job/IcoDLC.svg" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>DLC System integration</p>
                            <p>Programmeur</p>
                        </div>
                        <div class="tijd">
                            1/juli - 19/juli 2024
                        </div>
                    </div>
                    <div class="uitleg">
                        <p>1.5 week als instalateur en 1.5 week als programmeur</p>
                        <p>heb SvelteKit, figma, markdown, cloudfare toegepast</p>
                    </div>
                </div>

                <div class="job">
                    <div class="picture">
                        <img src="src\assets/logo.png" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>Portfolio</p>
                            <p>Persoonlijk project</p>
                        </div>
                        <div class="tijd">
                            26/aug - ...
                        </div>
                    </div>
                    <div class="werk">

                        <p>Gemaakt in svelte</p>
                    </div>
                </div>
            </div>
        </div>


        <style lang="scss">

            .header{
                padding: 2rem 0;
            }

.main-container {
	display: grid;
	justify-items: center;
	align-items: center;
}
.ervaring {
	display: grid;
	width: 90%;
	align-items: center;
	justify-items: center;
	gap: 1rem;

	.job {
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
	}
}
.picture{
    width: 100%;
height: 5rem;
.jobImg{
    height: 100%;
    width: auto;
}

}


@media (max-width: 1203px) {
.ervaring{
    .job {
		grid-template-columns: 1fr 1fr;
	}
}
.picture{
     grid-row-start: 1;
  grid-row-end: 3;
}
}

@media (max-width: 768px) {
	.ervaring{
        .job {
		grid-template-columns: 1fr;
	}
}

.picture{
     grid-row-start: 1;
  grid-row-end: 1;
}
    
}

        </style>
