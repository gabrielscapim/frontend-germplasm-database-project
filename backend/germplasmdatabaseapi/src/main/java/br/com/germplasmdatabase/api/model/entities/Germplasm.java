package br.com.germplasmdatabase.api.model.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Germplasm {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NotBlank
	@Column(name="nome")
	private String nome;
	
	@NotBlank
	@Column(name="deletado")
	private Boolean deletado;

	@NotBlank
	@Column(name="tipo_de_material_genetico")
	private String tipoDeMaterialGenetico;
	
	@NotBlank
	@Column(name = "textura_do_grao")
	private String texturaDoGrao;

	@NotBlank
	@Column(name = "origem")
	private String origem;

	@NotBlank
	@Column(name = "transgenico")
	private Boolean transgenico;

	@NotBlank
	@Column(name = "eventos_transgenicos")
	private String eventosTransgenicos;

	@NotBlank
	@Column(name = "local_na_camara_fria")
	private String localNaCamaraFria;

	@NotBlank
	@Column(name = "data_de_entrada")
	private String dataDeEntrada;

	@NotBlank
	@Column(name = "data_da_ultima_colheita")
	private String dataDaUltimaColheita;

	@Min(0)
	@Max(100)
	@Column(name="primeira_folha_pigmentacao_antocianinica_da_bainha")
	private Integer primeiraFolhaPigmentacaoAntocianinicaDaBainha;

	@Min(0)
	@Max(100)
	@Column(name="primeira_folha_forma_do_apice")
	private Integer primeiraFolhaFormaDoApice;

	@Min(0)
	@Max(100)
	@Column(name="folhagem_intensidade_da_cor_verde")
	private Integer folhagemIntensidadeDaCorVerde;
	
	@Min(0)
	@Max(100)
	@Column(name="folha_ondulacao_da_margem_da_lamina")
	private Integer folhaOndulacaoDaMargemDaLamina;

	@Min(0)
	@Max(100)
	@Column(name="folha_angulo_entre_a_lamina_e_o_colmo")
	private Integer folhaAnguloEntreALaminaEOColmo;

	@Min(0)
	@Max(100)
	@Column(name="folha_curvatura_da_lamina")
	private Integer folhaCurvaturaDaLamina;

	@Min(0)
	@Max(100)
	@Column(name="colmo_grau_do_zig_zag")
	private Integer colmoGrauDoZigZag;

	@Min(0)
	@Max(100)
	@Column(name="pendao_ciclo_ate_a_antese")
	private Integer pendaoCicloAteAAntese;

	@Min(0)
	@Max(100)
	@Column(name="pendao_pigmentacao_antocianinica_na_base_da_gluma")
	private Integer pendaoPigmentacaoAntocianinicaNaBaseDaGluma;

	@Min(0)
	@Max(100)
	@Column(name="pendao_pigmentacao_antocianinica_da_gluma_excluida_a_base")
	private Integer pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase;

	@Min(0)
	@Max(100)
	@Column(name="pendao_pigmentacao_antocianinica_das_anteras")
	private Integer pendaoPigmentacaoAntocianinicaDasAnteras;

	@Min(0)
	@Max(100)
	@Column(name="pendao_angulo_entre_o_eixo_principal_e_os_ramos_laterais")
	private Integer pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais;

	@Min(0)
	@Max(100)
	@Column(name="pendao_curvatura_dos_ramos_laterais")
	private Integer pendaoCurvaturaDosRamosLaterais;

	@Min(0)
	@Max(100)
	@Column(name="pendao_numero_de_ramificacoes_primarias")
	private Integer pendaoNumeroDeRamificacoesPrimarias;

	@Min(0)
	@Max(100)
	@Column(name="espiga_ciclo_ate_o_aparecimento_dos_estigmas")
	private Integer espigaCicloAteOAparecimentoDosEstigmas;

	@Min(0)
	@Max(100)
	@Column(name="espiga_pigmentacao_antocianinica_dos_estigmas")
	private Integer espigaPigmentacaoAntocianinicaDosEstigmas;

	@Min(0)
	@Max(100)
	@Column(name="colmo_pigmentacao_antocianinica_das_raizes_aereas")
	private Integer colmoPigmentacaoAntocianinicaDasRaizesAereas;

	@Min(0)
	@Max(100)
	@Column(name="pendao_densidade_das_espiguetas")
	private Integer pendaoDensidadeDasEspiguetas;

	@Min(0)
	@Max(100)
	@Column(name="folha_pigmentacao_antocianinica_da_bainha")
	private Integer folhaPigmentacaoAntocianinicaDaBainha;

	@Min(0)
	@Max(100)
	@Column(name="colmo_pigmentacao_antocianinica_dos_entrenos")
	private Integer colmoPigmentacaoAntocianinicaDosEntrenos;

	@Min(0)
	@Max(100)
	@Column(name="pendao_comp_do_eixo_principal_acima_do_ramo_lateral_mais_baixo")
	private Integer pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo;
    
	@Min(0)
	@Max(100)
	@Column(name="pendao_comp_do_eixo_principal_acima_do_ramo_lateral_mais_alto")
	private Integer pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto;

	@Min(0)
	@Max(100)
	@Column(name="pendao_comp_do_ramo_lateral")
	private Integer pendaoCompDoRamoLateral;

	@Min(0)
	@Max(100)
	@Column(name="planta_comp")
	private Integer plantaComp;

	@Min(0)
	@Max(100)
	@Column(name="planta_relacao_alt_ins_pedunculo_espiga_mais_alta_e_comp_planta")
	private Integer plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta;

	@Min(0)
	@Max(100)
	@Column(name="folha_largura_da_lamina")
	private Integer folhaLarguraDaLamina;

	@Min(0)
	@Max(100)
	@Column(name="pedunculo_comp")
	private Integer pedunculoComp;

	@Min(0)
	@Max(100)
	@Column(name="espiga_comp")
	private Integer espigaComp;

	@Min(0)
	@Max(100)
	@Column(name="espiga_diametro_no_meio_da_espiga")
	private Integer espigaDiametroNoMeioDaEspiga;

	@Min(0)
	@Max(100)
	@Column(name="espiga_forma")
	private Integer espigaForma;

	@Min(0)
	@Max(100)
	@Column(name="espiga_numero_de_fileiras_de_graos")
	private Integer espigaNumeroDeFileirasDeGraos;

	@Min(0)
	@Max(100)
	@Column(name="espiga_numero_de_cores_dos_graos")
	private Integer espigaNumeroDeCoresDosGraos;

	@Min(0)
	@Max(100)
	@Column(name="grao_intensidade_da_cor_amarela")
	private Integer graoIntensidadeDaCorAmarela;

	@Min(0)
	@Max(100)
	@Column(name="grao_comp")
	private Integer graoComp;

	@Min(0)
	@Max(100)
	@Column(name="grao_largura")
	private Integer graoLargura;

	@Min(0)
	@Max(100)
	@Column(name="espiga_tipo_de_grao")
	private Integer espigaTipoDeGrao;

	@Min(0)
	@Max(100)
	@Column(name="espiga_enrugamento_do_extremo_superior_do_grao")
	private Integer espigaEnrugamentoDoExtremoSuperiorDoGrao;

	@Min(0)
	@Max(100)
	@Column(name="espiga_cor_do_extremo_superior_do_grao")
	private Integer espigaCorDoExtremoSuperiorDoGrao;

	@Min(0)
	@Max(100)
	@Column(name="espiga_cor_do_lado_dorsal_do_grao")
	private Integer espigaCorDoLadoDorsalDoGrao;
	
	@Min(0)
	@Max(100)
	@Column(name="tipo_de_grao_estourado")
	private Integer tipoDeGraoEstourado;

	public Germplasm(int id, String nome, Boolean deletado, String tipoDeMaterialGenetico, String texturaDoGrao,
			String origem, Boolean transgenico, String eventosTransgenicos, String localNaCamaraFria,
			String dataDeEntrada, String dataDaUltimaColheita, Integer primeiraFolhaPigmentacaoAntocianinicaDaBainha,
			Integer primeiraFolhaFormaDoApice, Integer folhagemIntensidadeDaCorVerde,
			Integer folhaOndulacaoDaMargemDaLamina, Integer folhaAnguloEntreALaminaEOColmo,
			Integer folhaCurvaturaDaLamina, Integer colmoGrauDoZigZag, Integer pendaoCicloAteAAntese,
			Integer pendaoPigmentacaoAntocianinicaNaBaseDaGluma,
			Integer pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase,
			Integer pendaoPigmentacaoAntocianinicaDasAnteras, Integer pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais,
			Integer pendaoCurvaturaDosRamosLaterais, Integer pendaoNumeroDeRamificacoesPrimarias,
			Integer espigaCicloAteOAparecimentoDosEstigmas, Integer espigaPigmentacaoAntocianinicaDosEstigmas,
			Integer colmoPigmentacaoAntocianinicaDasRaizesAereas, Integer pendaoDensidadeDasEspiguetas,
			Integer folhaPigmentacaoAntocianinicaDaBainha, Integer colmoPigmentacaoAntocianinicaDosEntrenos,
			Integer pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo,
			Integer pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto, Integer pendaoCompDoRamoLateral,
			Integer plantaComp, Integer plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta,
			Integer folhaLarguraDaLamina, Integer pedunculoComp, Integer espigaComp,
			Integer espigaDiametroNoMeioDaEspiga, Integer espigaForma, Integer espigaNumeroDeFileirasDeGraos,
			Integer espigaNumeroDeCoresDosGraos, Integer graoIntensidadeDaCorAmarela, Integer graoComp,
			Integer graoLargura, Integer espigaTipoDeGrao, Integer espigaEnrugamentoDoExtremoSuperiorDoGrao,
			Integer espigaCorDoExtremoSuperiorDoGrao, Integer espigaCorDoLadoDorsalDoGrao, Integer tipoDeGraoEstourado,
			Integer espigaPigmentacaoAntocianinicaDasGlumasDoSabugo) {
		super();
		this.id = id;
		this.nome = nome;
		this.deletado = deletado;
		this.tipoDeMaterialGenetico = tipoDeMaterialGenetico;
		this.texturaDoGrao = texturaDoGrao;
		this.origem = origem;
		this.transgenico = transgenico;
		this.eventosTransgenicos = eventosTransgenicos;
		this.localNaCamaraFria = localNaCamaraFria;
		this.dataDeEntrada = dataDeEntrada;
		this.dataDaUltimaColheita = dataDaUltimaColheita;
		this.primeiraFolhaPigmentacaoAntocianinicaDaBainha = primeiraFolhaPigmentacaoAntocianinicaDaBainha;
		this.primeiraFolhaFormaDoApice = primeiraFolhaFormaDoApice;
		this.folhagemIntensidadeDaCorVerde = folhagemIntensidadeDaCorVerde;
		this.folhaOndulacaoDaMargemDaLamina = folhaOndulacaoDaMargemDaLamina;
		this.folhaAnguloEntreALaminaEOColmo = folhaAnguloEntreALaminaEOColmo;
		this.folhaCurvaturaDaLamina = folhaCurvaturaDaLamina;
		this.colmoGrauDoZigZag = colmoGrauDoZigZag;
		this.pendaoCicloAteAAntese = pendaoCicloAteAAntese;
		this.pendaoPigmentacaoAntocianinicaNaBaseDaGluma = pendaoPigmentacaoAntocianinicaNaBaseDaGluma;
		this.pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase = pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase;
		this.pendaoPigmentacaoAntocianinicaDasAnteras = pendaoPigmentacaoAntocianinicaDasAnteras;
		this.pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais = pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais;
		this.pendaoCurvaturaDosRamosLaterais = pendaoCurvaturaDosRamosLaterais;
		this.pendaoNumeroDeRamificacoesPrimarias = pendaoNumeroDeRamificacoesPrimarias;
		this.espigaCicloAteOAparecimentoDosEstigmas = espigaCicloAteOAparecimentoDosEstigmas;
		this.espigaPigmentacaoAntocianinicaDosEstigmas = espigaPigmentacaoAntocianinicaDosEstigmas;
		this.colmoPigmentacaoAntocianinicaDasRaizesAereas = colmoPigmentacaoAntocianinicaDasRaizesAereas;
		this.pendaoDensidadeDasEspiguetas = pendaoDensidadeDasEspiguetas;
		this.folhaPigmentacaoAntocianinicaDaBainha = folhaPigmentacaoAntocianinicaDaBainha;
		this.colmoPigmentacaoAntocianinicaDosEntrenos = colmoPigmentacaoAntocianinicaDosEntrenos;
		this.pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo = pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo;
		this.pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto = pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto;
		this.pendaoCompDoRamoLateral = pendaoCompDoRamoLateral;
		this.plantaComp = plantaComp;
		this.plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta = plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta;
		this.folhaLarguraDaLamina = folhaLarguraDaLamina;
		this.pedunculoComp = pedunculoComp;
		this.espigaComp = espigaComp;
		this.espigaDiametroNoMeioDaEspiga = espigaDiametroNoMeioDaEspiga;
		this.espigaForma = espigaForma;
		this.espigaNumeroDeFileirasDeGraos = espigaNumeroDeFileirasDeGraos;
		this.espigaNumeroDeCoresDosGraos = espigaNumeroDeCoresDosGraos;
		this.graoIntensidadeDaCorAmarela = graoIntensidadeDaCorAmarela;
		this.graoComp = graoComp;
		this.graoLargura = graoLargura;
		this.espigaTipoDeGrao = espigaTipoDeGrao;
		this.espigaEnrugamentoDoExtremoSuperiorDoGrao = espigaEnrugamentoDoExtremoSuperiorDoGrao;
		this.espigaCorDoExtremoSuperiorDoGrao = espigaCorDoExtremoSuperiorDoGrao;
		this.espigaCorDoLadoDorsalDoGrao = espigaCorDoLadoDorsalDoGrao;
		this.tipoDeGraoEstourado = tipoDeGraoEstourado;
		this.espigaPigmentacaoAntocianinicaDasGlumasDoSabugo = espigaPigmentacaoAntocianinicaDasGlumasDoSabugo;
	}


	@Column(name="espiga_pigmentacao_antocianinica_das_glumas_do_sabugo")
	private Integer espigaPigmentacaoAntocianinicaDasGlumasDoSabugo;

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}
	
	
	public Boolean getDeletado() {
		return deletado;
	}


	public void setDeletado(Boolean deletado) {
		this.deletado = deletado;
	}



	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTipoDeMaterialGenetico() {
		return tipoDeMaterialGenetico;
	}


	public void setTipoDeMaterialGenetico(String tipoDeMaterialGenetico) {
		this.tipoDeMaterialGenetico = tipoDeMaterialGenetico;
	}


	public String getTexturaDoGrao() {
		return texturaDoGrao;
	}


	public void setTexturaDoGrao(String texturaDoGrao) {
		this.texturaDoGrao = texturaDoGrao;
	}


	public String getOrigem() {
		return origem;
	}


	public void setOrigem(String origem) {
		this.origem = origem;
	}


	public Boolean getTransgenico() {
		return transgenico;
	}


	public void setTransgenico(Boolean transgenico) {
		this.transgenico = transgenico;
	}


	public String getEventosTransgenicos() {
		return eventosTransgenicos;
	}


	public void setEventosTransgenicos(String eventosTransgenicos) {
		this.eventosTransgenicos = eventosTransgenicos;
	}


	public String getLocalNaCamaraFria() {
		return localNaCamaraFria;
	}


	public void setLocalNaCamaraFria(String localNaCamaraFria) {
		this.localNaCamaraFria = localNaCamaraFria;
	}


	public String getDataDeEntrada() {
		return dataDeEntrada;
	}


	public void setDataDeEntrada(String dataDeEntrada) {
		this.dataDeEntrada = dataDeEntrada;
	}


	public String getDataDaUltimaColheita() {
		return dataDaUltimaColheita;
	}


	public void setDataDaUltimaColheita(String dataDaUltimaColheita) {
		this.dataDaUltimaColheita = dataDaUltimaColheita;
	}



	public Integer getPrimeiraFolhaPigmentacaoAntocianinicaDaBainha() {
		return primeiraFolhaPigmentacaoAntocianinicaDaBainha;
	}


	public void setPrimeiraFolhaPigmentacaoAntocianinicaDaBainha(Integer primeiraFolhaPigmentacaoAntocianinicaDaBainha) {
		this.primeiraFolhaPigmentacaoAntocianinicaDaBainha = primeiraFolhaPigmentacaoAntocianinicaDaBainha;
	}


	public Integer getPrimeiraFolhaFormaDoApice() {
		return primeiraFolhaFormaDoApice;
	}


	public void setPrimeiraFolhaFormaDoApice(Integer primeiraFolhaFormaDoApice) {
		this.primeiraFolhaFormaDoApice = primeiraFolhaFormaDoApice;
	}


	public Integer getFolhagemIntensidadeDaCorVerde() {
		return folhagemIntensidadeDaCorVerde;
	}


	public void setFolhagemIntensidadeDaCorVerde(Integer folhagemIntensidadeDaCorVerde) {
		this.folhagemIntensidadeDaCorVerde = folhagemIntensidadeDaCorVerde;
	}


	public Integer getFolhaOndulacaoDaMargemDaLamina() {
		return folhaOndulacaoDaMargemDaLamina;
	}


	public void setFolhaOndulacaoDaMargemDaLamina(Integer folhaOndulacaoDaMargemDaLamina) {
		this.folhaOndulacaoDaMargemDaLamina = folhaOndulacaoDaMargemDaLamina;
	}


	public Integer getFolhaAnguloEntreALaminaEOColmo() {
		return folhaAnguloEntreALaminaEOColmo;
	}


	public void setFolhaAnguloEntreALaminaEOColmo(Integer folhaAnguloEntreALaminaEOColmo) {
		this.folhaAnguloEntreALaminaEOColmo = folhaAnguloEntreALaminaEOColmo;
	}


	public Integer getFolhaCurvaturaDaLamina() {
		return folhaCurvaturaDaLamina;
	}


	public void setFolhaCurvaturaDaLamina(Integer folhaCurvaturaDaLamina) {
		this.folhaCurvaturaDaLamina = folhaCurvaturaDaLamina;
	}


	public Integer getColmoGrauDoZigZag() {
		return colmoGrauDoZigZag;
	}


	public void setColmoGrauDoZigZag(Integer colmoGrauDoZigZag) {
		this.colmoGrauDoZigZag = colmoGrauDoZigZag;
	}


	public Integer getPendaoCicloAteAAntese() {
		return pendaoCicloAteAAntese;
	}


	public void setPendaoCicloAteAAntese(Integer pendaoCicloAteAAntese) {
		this.pendaoCicloAteAAntese = pendaoCicloAteAAntese;
	}


	public Integer getPendaoPigmentacaoAntocianinicaNaBaseDaGluma() {
		return pendaoPigmentacaoAntocianinicaNaBaseDaGluma;
	}


	public void setPendaoPigmentacaoAntocianinicaNaBaseDaGluma(Integer pendaoPigmentacaoAntocianinicaNaBaseDaGluma) {
		this.pendaoPigmentacaoAntocianinicaNaBaseDaGluma = pendaoPigmentacaoAntocianinicaNaBaseDaGluma;
	}


	public Integer getPendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase() {
		return pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase;
	}


	public void setPendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase(
			Integer pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase) {
		this.pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase = pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase;
	}


	public Integer getPendaoPigmentacaoAntocianinicaDasAnteras() {
		return pendaoPigmentacaoAntocianinicaDasAnteras;
	}


	public void setPendaoPigmentacaoAntocianinicaDasAnteras(Integer pendaoPigmentacaoAntocianinicaDasAnteras) {
		this.pendaoPigmentacaoAntocianinicaDasAnteras = pendaoPigmentacaoAntocianinicaDasAnteras;
	}


	public Integer getPendaoAnguloEntreOEixoPrincipalEOsRamosLaterais() {
		return pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais;
	}


	public void setPendaoAnguloEntreOEixoPrincipalEOsRamosLaterais(
			Integer pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais) {
		this.pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais = pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais;
	}


	public Integer getPendaoCurvaturaDosRamosLaterais() {
		return pendaoCurvaturaDosRamosLaterais;
	}


	public void setPendaoCurvaturaDosRamosLaterais(Integer pendaoCurvaturaDosRamosLaterais) {
		this.pendaoCurvaturaDosRamosLaterais = pendaoCurvaturaDosRamosLaterais;
	}


	public Integer getPendaoNumeroDeRamificacoesPrimarias() {
		return pendaoNumeroDeRamificacoesPrimarias;
	}


	public void setPendaoNumeroDeRamificacoesPrimarias(Integer pendaoNumeroDeRamificacoesPrimarias) {
		this.pendaoNumeroDeRamificacoesPrimarias = pendaoNumeroDeRamificacoesPrimarias;
	}


	public Integer getEspigaCicloAteOAparecimentoDosEstigmas() {
		return espigaCicloAteOAparecimentoDosEstigmas;
	}


	public void setEspigaCicloAteOAparecimentoDosEstigmas(Integer espigaCicloAteOAparecimentoDosEstigmas) {
		this.espigaCicloAteOAparecimentoDosEstigmas = espigaCicloAteOAparecimentoDosEstigmas;
	}


	public Integer getEspigaPigmentacaoAntocianinicaDosEstigmas() {
		return espigaPigmentacaoAntocianinicaDosEstigmas;
	}


	public void setEspigaPigmentacaoAntocianinicaDosEstigmas(Integer espigaPigmentacaoAntocianinicaDosEstigmas) {
		this.espigaPigmentacaoAntocianinicaDosEstigmas = espigaPigmentacaoAntocianinicaDosEstigmas;
	}


	public Integer getColmoPigmentacaoAntocianinicaDasRaizesAereas() {
		return colmoPigmentacaoAntocianinicaDasRaizesAereas;
	}


	public void setColmoPigmentacaoAntocianinicaDasRaizesAereas(Integer colmoPigmentacaoAntocianinicaDasRaizesAereas) {
		this.colmoPigmentacaoAntocianinicaDasRaizesAereas = colmoPigmentacaoAntocianinicaDasRaizesAereas;
	}


	public Integer getPendaoDensidadeDasEspiguetas() {
		return pendaoDensidadeDasEspiguetas;
	}


	public void setPendaoDensidadeDasEspiguetas(Integer pendaoDensidadeDasEspiguetas) {
		this.pendaoDensidadeDasEspiguetas = pendaoDensidadeDasEspiguetas;
	}


	public Integer getFolhaPigmentacaoAntocianinicaDaBainha() {
		return folhaPigmentacaoAntocianinicaDaBainha;
	}


	public void setFolhaPigmentacaoAntocianinicaDaBainha(Integer folhaPigmentacaoAntocianinicaDaBainha) {
		this.folhaPigmentacaoAntocianinicaDaBainha = folhaPigmentacaoAntocianinicaDaBainha;
	}


	public Integer getColmoPigmentacaoAntocianinicaDosEntrenos() {
		return colmoPigmentacaoAntocianinicaDosEntrenos;
	}


	public void setColmoPigmentacaoAntocianinicaDosEntrenos(Integer colmoPigmentacaoAntocianinicaDosEntrenos) {
		this.colmoPigmentacaoAntocianinicaDosEntrenos = colmoPigmentacaoAntocianinicaDosEntrenos;
	}


	public Integer getPendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo() {
		return pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo;
	}


	public void setPendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo(
			Integer pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo) {
		this.pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo = pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo;
	}


	public Integer getPendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto() {
		return pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto;
	}


	public void setPendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto(
			Integer pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto) {
		this.pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto = pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto;
	}


	public Integer getPendaoCompDoRamoLateral() {
		return pendaoCompDoRamoLateral;
	}


	public void setPendaoCompDoRamoLateral(Integer pendaoCompDoRamoLateral) {
		this.pendaoCompDoRamoLateral = pendaoCompDoRamoLateral;
	}


	public Integer getPlantaComp() {
		return plantaComp;
	}


	public void setPlantaComp(Integer plantaComp) {
		this.plantaComp = plantaComp;
	}


	public Integer getPlantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta() {
		return plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta;
	}


	public void setPlantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta(
			Integer plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta) {
		this.plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta = plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta;
	}


	public Integer getFolhaLarguraDaLamina() {
		return folhaLarguraDaLamina;
	}


	public void setFolhaLarguraDaLamina(Integer folhaLarguraDaLamina) {
		this.folhaLarguraDaLamina = folhaLarguraDaLamina;
	}


	public Integer getPedunculoComp() {
		return pedunculoComp;
	}


	public void setPedunculoComp(Integer pedunculoComp) {
		this.pedunculoComp = pedunculoComp;
	}


	public Integer getEspigaComp() {
		return espigaComp;
	}


	public void setEspigaComp(Integer espigaComp) {
		this.espigaComp = espigaComp;
	}


	public Integer getEspigaDiametroNoMeioDaEspiga() {
		return espigaDiametroNoMeioDaEspiga;
	}


	public void setEspigaDiametroNoMeioDaEspiga(Integer espigaDiametroNoMeioDaEspiga) {
		this.espigaDiametroNoMeioDaEspiga = espigaDiametroNoMeioDaEspiga;
	}


	public Integer getEspigaForma() {
		return espigaForma;
	}


	public void setEspigaForma(Integer espigaForma) {
		this.espigaForma = espigaForma;
	}


	public Integer getEspigaNumeroDeFileirasDeGraos() {
		return espigaNumeroDeFileirasDeGraos;
	}


	public void setEspigaNumeroDeFileirasDeGraos(Integer espigaNumeroDeFileirasDeGraos) {
		this.espigaNumeroDeFileirasDeGraos = espigaNumeroDeFileirasDeGraos;
	}


	public Integer getEspigaNumeroDeCoresDosGraos() {
		return espigaNumeroDeCoresDosGraos;
	}


	public void setEspigaNumeroDeCoresDosGraos(Integer espigaNumeroDeCoresDosGraos) {
		this.espigaNumeroDeCoresDosGraos = espigaNumeroDeCoresDosGraos;
	}


	public Integer getGraoIntensidadeDaCorAmarela() {
		return graoIntensidadeDaCorAmarela;
	}


	public void setGraoIntensidadeDaCorAmarela(Integer graoIntensidadeDaCorAmarela) {
		this.graoIntensidadeDaCorAmarela = graoIntensidadeDaCorAmarela;
	}


	public Integer getGraoComp() {
		return graoComp;
	}


	public void setGraoComp(Integer graoComp) {
		this.graoComp = graoComp;
	}


	public Integer getGraoLargura() {
		return graoLargura;
	}


	public void setGraoLargura(Integer graoLargura) {
		this.graoLargura = graoLargura;
	}


	public Integer getEspigaTipoDeGrao() {
		return espigaTipoDeGrao;
	}


	public void setEspigaTipoDeGrao(Integer espigaTipoDeGrao) {
		this.espigaTipoDeGrao = espigaTipoDeGrao;
	}


	public Integer getEspigaEnrugamentoDoExtremoSuperiorDoGrao() {
		return espigaEnrugamentoDoExtremoSuperiorDoGrao;
	}


	public void setEspigaEnrugamentoDoExtremoSuperiorDoGrao(Integer espigaEnrugamentoDoExtremoSuperiorDoGrao) {
		this.espigaEnrugamentoDoExtremoSuperiorDoGrao = espigaEnrugamentoDoExtremoSuperiorDoGrao;
	}


	public Integer getEspigaCorDoExtremoSuperiorDoGrao() {
		return espigaCorDoExtremoSuperiorDoGrao;
	}


	public void setEspigaCorDoExtremoSuperiorDoGrao(Integer espigaCorDoExtremoSuperiorDoGrao) {
		this.espigaCorDoExtremoSuperiorDoGrao = espigaCorDoExtremoSuperiorDoGrao;
	}


	public Integer getEspigaCorDoLadoDorsalDoGrao() {
		return espigaCorDoLadoDorsalDoGrao;
	}


	public void setEspigaCorDoLadoDorsalDoGrao(Integer espigaCorDoLadoDorsalDoGrao) {
		this.espigaCorDoLadoDorsalDoGrao = espigaCorDoLadoDorsalDoGrao;
	}


	public Integer getTipoDeGraoEstourado() {
		return tipoDeGraoEstourado;
	}


	public void setTipoDeGraoEstourado(Integer tipoDeGraoEstourado) {
		this.tipoDeGraoEstourado = tipoDeGraoEstourado;
	}


	public Integer getEspigaPigmentacaoAntocianinicaDasGlumasDoSabugo() {
		return espigaPigmentacaoAntocianinicaDasGlumasDoSabugo;
	}


	public void setEspigaPigmentacaoAntocianinicaDasGlumasDoSabugo(
			Integer espigaPigmentacaoAntocianinicaDasGlumasDoSabugo) {
		this.espigaPigmentacaoAntocianinicaDasGlumasDoSabugo = espigaPigmentacaoAntocianinicaDasGlumasDoSabugo;
	}


	public Germplasm() {
		
	}
	
}
