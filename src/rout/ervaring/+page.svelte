<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from '../../lib/Counter.svelte'
</script>

<main>
  <div class="header">
            <h1>Mijn werk ervaring</h1>
        </div>

        <div class="main-container">
            <div class="ervaring">
                <div class="job">
                    <div class="picture">
                        <img src="img/" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>Vakantiejob Wienerberger</p>
                            <p>Wienerberger, Zonnebeke</p>
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
                        <img src="img/" class="jobImg" alt="job">
                    </div>

                    <div class="info-job">
                        <div class="werk">
                            <p>Vakantiejob Wienerberger</p>
                            <p>Wienerberger, Zonnebeke</p>
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
                        <img src="img/" class="jobImg" alt="job">
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
                        <img src="img/" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>Verpleging</p>
                            <p>Woonzorgcentrum Westevier, Brugge</p>
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
                        <img src="img/" class="jobImg" alt="job">
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
                        <img src="img/" class="jobImg" alt="job">
                    </div>
                    <div class="info-job">
                        <div class="werk">
                            <p>DLC System integration</p>
                            <p>Programmeur</p>
                        </div>
                        <div class="tijd">
                            1/juli - 19/ juli 2024
                        </div>
                    </div>
                    <div class="uitleg">
                        <p>1.5week als instalateur en 1.5 als programmeur</p>
                        <p>heb SvelteKit,figma, markdown, cloudfare</p>
                    </div>
                </div>

                <div class="job">
                    <div class="picture">
                        <img src="img/" class="jobImg" alt="job">
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

                        <p>gemaakt met scss/css, html</p>
                    </div>
                </div>
            </div>
        </div>
</main>

<style lang="scss">

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
	}
}

</style>
