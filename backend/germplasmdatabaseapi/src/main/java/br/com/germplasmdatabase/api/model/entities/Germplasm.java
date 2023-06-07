package br.com.germplasmdatabase.api.model.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "germplasm")
public class Germplasm {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="deletado")
	private Boolean deletado;
	
	@NotBlank
	@Column(name="nome")
	private String nome;

	@NotBlank
	@Column(name="tipo_de_material_genetico")
	private String tipoDeMaterialGenetico;
	
	@NotBlank
	@Column(name = "textura_do_grao")
	private String texturaDoGrao;

	@NotBlank
	@Column(name = "origem")
	private String origem;

	@Column(name = "transgenico")
	private Boolean transgenico;

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
	@Column(name = "colletotrichum_graminicola")
	private Float colletotrichumGraminicola;

	@Min(0)
	@Column(name = "puccinia_sorghi")
	private Float pucciniaSorghi;

	@Min(0)
	@Column(name = "exserohilum_turcicum")
	private Float exserohilumTurcicum;

	@Min(0)
	@Column(name = "phaeosphaeria_maydis")
	private Float phaeosphaeriaMaydis;

	@Min(0)
	@Column(name = "puccinia_polysora")
	private Float pucciniaPolysora;

	@Min(0)
	@Column(name = "physopella_zeae")
	private Float physopellaZeae;

	@Min(0)
	@Column(name = "corn_stunt")
	private Float cornStunt;

	@Min(0)
	@Column(name = "diplodia_maydis")
	private Float diplodiaMaydis;

	@Min(0)
	@Column(name = "fusarium_moniliforme")
	private Float fusariumMoniliforme;

	@Min(0)
	@Column(name = "gibberella_zeae")
	private Float gibberellaZeae;

	@Min(0)
	@Column(name = "altura_de_planta")
	private Float alturaDePlanta;

	@Min(0)
	@Column(name = "altura_de_espiga")
	private Float alturaDeEspiga;

	@Min(0)
	@Column(name = "diametro_da_espiga")
	private Float diametroDaEspiga;

	@Min(0)
	@Column(name = "numero_de_graos_por_fileira")
	private Float numeroDeGraosPorFileira;

	@Min(0)
	@Column(name = "numero_de_fileiras_de_graos_por_espiga")
	private Float numeroDeFileirasDeGraosPorEspiga;

	@Min(0)
	@Column(name = "comprimento_de_espigas")
	private Float comprimentoDeEspigas;

	@Min(0)
	@Column(name = "rendimento_de_graos")
	private Float rendimentoDeGraos;

	@Min(0)
	@Column(name = "capacidade_de_expansao")
	private Float capacidadeDeExpansao;

	@Min(0)
	@Column(name = "massa_de_cem_graos")
	private Float massaDeCemGraos;

	@Min(0)
	@Column(name = "numero_de_espigas")
	private Float numeroDeEspigas;

	@Min(0)
	@Column(name = "diametro_do_colmo")
	private Float diametroDoColmo;

	@Min(0)
	@Column(name = "comprimento_de_grao")
	private Float comprimentoDeGrao;

	@Min(0)
	@Column(name = "largura_de_grao")
	private Float larguraDeGrao;

	@Min(0)
	@Column(name = "espessura_de_grao")
	private Float espessuraDeGrao;

	@Min(0)
	@Column(name = "espessura_do_pericarpo")
	private Float espessuraDoPericarpo;

	@Min(0)
	@Column(name = "difusividade_termica_do_pericarpo")
	private Float difusividadeTermicaDoPericarpo;

	@Min(0)
	@Column(name = "teor_de_proteina")
	private Float teorDeProteina;

	@Min(0)
	@Column(name = "teor_de_oleo")
	private Float teorDeOleo;

	@Min(0)
	@Column(name = "amido_total")
	private Float amidoTotal;
	
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

	@Min(0)
	@Max(100)
	@Column(name="espiga_pigmentacao_antocianinica_das_glumas_do_sabugo")
	private Integer espigaPigmentacaoAntocianinicaDasGlumasDoSabugo;
	
	@Column(name="informacoes_adicionais")
	private String informacoesAdicionais;

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

	public Float getColletotrichumGraminicola() {
		return colletotrichumGraminicola;
	}

	public void setColletotrichumGraminicola(Float colletotrichumGraminicola) {
		this.colletotrichumGraminicola = colletotrichumGraminicola;
	}

	public Float getPucciniaSorghi() {
		return pucciniaSorghi;
	}

	public void setPucciniaSorghi(Float pucciniaSorghi) {
		this.pucciniaSorghi = pucciniaSorghi;
	}

	public Float getExserohilumTurcicum() {
		return exserohilumTurcicum;
	}

	public void setExserohilumTurcicum(Float exserohilumTurcicum) {
		this.exserohilumTurcicum = exserohilumTurcicum;
	}

	public Float getPhaeosphaeriaMaydis() {
		return phaeosphaeriaMaydis;
	}

	public void setPhaeosphaeriaMaydis(Float phaeosphaeriaMaydis) {
		this.phaeosphaeriaMaydis = phaeosphaeriaMaydis;
	}

	public Float getPucciniaPolysora() {
		return pucciniaPolysora;
	}

	public void setPucciniaPolysora(Float pucciniaPolysora) {
		this.pucciniaPolysora = pucciniaPolysora;
	}

	public Float getPhysopellaZeae() {
		return physopellaZeae;
	}

	public void setPhysopellaZeae(Float physopellaZeae) {
		this.physopellaZeae = physopellaZeae;
	}

	public Float getCornStunt() {
		return cornStunt;
	}

	public void setCornStunt(Float cornStunt) {
		this.cornStunt = cornStunt;
	}

	public Float getDiplodiaMaydis() {
		return diplodiaMaydis;
	}

	public void setDiplodiaMaydis(Float diplodiaMaydis) {
		this.diplodiaMaydis = diplodiaMaydis;
	}

	public Float getFusariumMoniliforme() {
		return fusariumMoniliforme;
	}

	public void setFusariumMoniliforme(Float fusariumMoniliforme) {
		this.fusariumMoniliforme = fusariumMoniliforme;
	}

	public Float getGibberellaZeae() {
		return gibberellaZeae;
	}

	public void setGibberellaZeae(Float gibberellaZeae) {
		this.gibberellaZeae = gibberellaZeae;
	}

	public Float getAlturaDePlanta() {
		return alturaDePlanta;
	}

	public void setAlturaDePlanta(Float alturaDePlanta) {
		this.alturaDePlanta = alturaDePlanta;
	}

	public Float getAlturaDeEspiga() {
		return alturaDeEspiga;
	}

	public void setAlturaDeEspiga(Float alturaDeEspiga) {
		this.alturaDeEspiga = alturaDeEspiga;
	}

	public Float getDiametroDaEspiga() {
		return diametroDaEspiga;
	}

	public void setDiametroDaEspiga(Float diametroDaEspiga) {
		this.diametroDaEspiga = diametroDaEspiga;
	}

	public Float getNumeroDeGraosPorFileira() {
		return numeroDeGraosPorFileira;
	}

	public void setNumeroDeGraosPorFileira(Float numeroDeGraosPorFileira) {
		this.numeroDeGraosPorFileira = numeroDeGraosPorFileira;
	}

	public Float getNumeroDeFileirasDeGraosPorEspiga() {
		return numeroDeFileirasDeGraosPorEspiga;
	}

	public void setNumeroDeFileirasDeGraosPorEspiga(Float numeroDeFileirasDeGraosPorEspiga) {
		this.numeroDeFileirasDeGraosPorEspiga = numeroDeFileirasDeGraosPorEspiga;
	}

	public Float getComprimentoDeEspigas() {
		return comprimentoDeEspigas;
	}

	public void setComprimentoDeEspigas(Float comprimentoDeEspigas) {
		this.comprimentoDeEspigas = comprimentoDeEspigas;
	}

	public Float getRendimentoDeGraos() {
		return rendimentoDeGraos;
	}

	public void setRendimentoDeGraos(Float rendimentoDeGraos) {
		this.rendimentoDeGraos = rendimentoDeGraos;
	}

	public Float getCapacidadeDeExpansao() {
		return capacidadeDeExpansao;
	}

	public void setCapacidadeDeExpansao(Float capacidadeDeExpansao) {
		this.capacidadeDeExpansao = capacidadeDeExpansao;
	}

	public Float getMassaDeCemGraos() {
		return massaDeCemGraos;
	}

	public void setMassaDeCemGraos(Float massaDeCemGraos) {
		this.massaDeCemGraos = massaDeCemGraos;
	}

	public Float getNumeroDeEspigas() {
		return numeroDeEspigas;
	}

	public void setNumeroDeEspigas(Float numeroDeEspigas) {
		this.numeroDeEspigas = numeroDeEspigas;
	}

	public Float getDiametroDoColmo() {
		return diametroDoColmo;
	}

	public void setDiametroDoColmo(Float diametroDoColmo) {
		this.diametroDoColmo = diametroDoColmo;
	}

	public Float getComprimentoDeGrao() {
		return comprimentoDeGrao;
	}

	public void setComprimentoDeGrao(Float comprimentoDeGrao) {
		this.comprimentoDeGrao = comprimentoDeGrao;
	}

	public Float getLarguraDeGrao() {
		return larguraDeGrao;
	}

	public void setLarguraDeGrao(Float larguraDeGrao) {
		this.larguraDeGrao = larguraDeGrao;
	}

	public Float getEspessuraDeGrao() {
		return espessuraDeGrao;
	}

	public void setEspessuraDeGrao(Float espessuraDeGrao) {
		this.espessuraDeGrao = espessuraDeGrao;
	}

	public Float getEspessuraDoPericarpo() {
		return espessuraDoPericarpo;
	}

	public void setEspessuraDoPericarpo(Float espessuraDoPericarpo) {
		this.espessuraDoPericarpo = espessuraDoPericarpo;
	}

	public Float getDifusividadeTermicaDoPericarpo() {
		return difusividadeTermicaDoPericarpo;
	}

	public void setDifusividadeTermicaDoPericarpo(Float difusividadeTermicaDoPericarpo) {
		this.difusividadeTermicaDoPericarpo = difusividadeTermicaDoPericarpo;
	}

	public Float getTeorDeProteina() {
		return teorDeProteina;
	}

	public void setTeorDeProteina(Float teorDeProteina) {
		this.teorDeProteina = teorDeProteina;
	}

	public Float getTeorDeOleo() {
		return teorDeOleo;
	}

	public void setTeorDeOleo(Float teorDeOleo) {
		this.teorDeOleo = teorDeOleo;
	}

	public Float getAmidoTotal() {
		return amidoTotal;
	}

	public void setAmidoTotal(Float amidoTotal) {
		this.amidoTotal = amidoTotal;
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

	public String getInformacoesAdicionais() {
		return informacoesAdicionais;
	}

	public void setInformacoesAdicionais(String informacoesAdicionais) {
		this.informacoesAdicionais = informacoesAdicionais;
	}

	public Germplasm(int id, Boolean deletado, @NotBlank String nome, @NotBlank String tipoDeMaterialGenetico,
			@NotBlank String texturaDoGrao, @NotBlank String origem, Boolean transgenico, String eventosTransgenicos,
			@NotBlank String localNaCamaraFria, @NotBlank String dataDeEntrada, @NotBlank String dataDaUltimaColheita,
			Float colletotrichumGraminicola, Float pucciniaSorghi, Float exserohilumTurcicum, Float phaeosphaeriaMaydis,
			Float pucciniaPolysora, Float physopellaZeae, Float cornStunt, Float diplodiaMaydis,
			Float fusariumMoniliforme, Float gibberellaZeae, Float alturaDePlanta, Float alturaDeEspiga,
			Float diametroDaEspiga, Float numeroDeGraosPorFileira, Float numeroDeFileirasDeGraosPorEspiga,
			Float comprimentoDeEspigas, Float rendimentoDeGraos, Float capacidadeDeExpansao, Float massaDeCemGraos,
			Float numeroDeEspigas, Float diametroDoColmo, Float comprimentoDeGrao, Float larguraDeGrao,
			Float espessuraDeGrao, Float espessuraDoPericarpo, Float difusividadeTermicaDoPericarpo,
			Float teorDeProteina, Float teorDeOleo, Float amidoTotal,
			@Min(0) @Max(100) Integer primeiraFolhaPigmentacaoAntocianinicaDaBainha,
			@Min(0) @Max(100) Integer primeiraFolhaFormaDoApice,
			@Min(0) @Max(100) Integer folhagemIntensidadeDaCorVerde,
			@Min(0) @Max(100) Integer folhaOndulacaoDaMargemDaLamina,
			@Min(0) @Max(100) Integer folhaAnguloEntreALaminaEOColmo, @Min(0) @Max(100) Integer folhaCurvaturaDaLamina,
			@Min(0) @Max(100) Integer colmoGrauDoZigZag, @Min(0) @Max(100) Integer pendaoCicloAteAAntese,
			@Min(0) @Max(100) Integer pendaoPigmentacaoAntocianinicaNaBaseDaGluma,
			@Min(0) @Max(100) Integer pendaoPigmentacaoAntocianinicaDaGlumaExcluidaABase,
			@Min(0) @Max(100) Integer pendaoPigmentacaoAntocianinicaDasAnteras,
			@Min(0) @Max(100) Integer pendaoAnguloEntreOEixoPrincipalEOsRamosLaterais,
			@Min(0) @Max(100) Integer pendaoCurvaturaDosRamosLaterais,
			@Min(0) @Max(100) Integer pendaoNumeroDeRamificacoesPrimarias,
			@Min(0) @Max(100) Integer espigaCicloAteOAparecimentoDosEstigmas,
			@Min(0) @Max(100) Integer espigaPigmentacaoAntocianinicaDosEstigmas,
			@Min(0) @Max(100) Integer colmoPigmentacaoAntocianinicaDasRaizesAereas,
			@Min(0) @Max(100) Integer pendaoDensidadeDasEspiguetas,
			@Min(0) @Max(100) Integer folhaPigmentacaoAntocianinicaDaBainha,
			@Min(0) @Max(100) Integer colmoPigmentacaoAntocianinicaDosEntrenos,
			@Min(0) @Max(100) Integer pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisBaixo,
			@Min(0) @Max(100) Integer pendaoCompDoEixoPrincipalAcimaDoRamoLateralMaisAlto,
			@Min(0) @Max(100) Integer pendaoCompDoRamoLateral, @Min(0) @Max(100) Integer plantaComp,
			@Min(0) @Max(100) Integer plantaRelacaoAltInsPedunculoEspigaMaisAltaECompPlanta,
			@Min(0) @Max(100) Integer folhaLarguraDaLamina, @Min(0) @Max(100) Integer pedunculoComp,
			@Min(0) @Max(100) Integer espigaComp, @Min(0) @Max(100) Integer espigaDiametroNoMeioDaEspiga,
			@Min(0) @Max(100) Integer espigaForma, @Min(0) @Max(100) Integer espigaNumeroDeFileirasDeGraos,
			@Min(0) @Max(100) Integer espigaNumeroDeCoresDosGraos,
			@Min(0) @Max(100) Integer graoIntensidadeDaCorAmarela, @Min(0) @Max(100) Integer graoComp,
			@Min(0) @Max(100) Integer graoLargura, @Min(0) @Max(100) Integer espigaTipoDeGrao,
			@Min(0) @Max(100) Integer espigaEnrugamentoDoExtremoSuperiorDoGrao,
			@Min(0) @Max(100) Integer espigaCorDoExtremoSuperiorDoGrao,
			@Min(0) @Max(100) Integer espigaCorDoLadoDorsalDoGrao, @Min(0) @Max(100) Integer tipoDeGraoEstourado,
			Integer espigaPigmentacaoAntocianinicaDasGlumasDoSabugo, String informacoesAdicionais) {
		super();
		this.id = id;
		this.deletado = deletado;
		this.nome = nome;
		this.tipoDeMaterialGenetico = tipoDeMaterialGenetico;
		this.texturaDoGrao = texturaDoGrao;
		this.origem = origem;
		this.transgenico = transgenico;
		this.eventosTransgenicos = eventosTransgenicos;
		this.localNaCamaraFria = localNaCamaraFria;
		this.dataDeEntrada = dataDeEntrada;
		this.dataDaUltimaColheita = dataDaUltimaColheita;
		this.colletotrichumGraminicola = colletotrichumGraminicola;
		this.pucciniaSorghi = pucciniaSorghi;
		this.exserohilumTurcicum = exserohilumTurcicum;
		this.phaeosphaeriaMaydis = phaeosphaeriaMaydis;
		this.pucciniaPolysora = pucciniaPolysora;
		this.physopellaZeae = physopellaZeae;
		this.cornStunt = cornStunt;
		this.diplodiaMaydis = diplodiaMaydis;
		this.fusariumMoniliforme = fusariumMoniliforme;
		this.gibberellaZeae = gibberellaZeae;
		this.alturaDePlanta = alturaDePlanta;
		this.alturaDeEspiga = alturaDeEspiga;
		this.diametroDaEspiga = diametroDaEspiga;
		this.numeroDeGraosPorFileira = numeroDeGraosPorFileira;
		this.numeroDeFileirasDeGraosPorEspiga = numeroDeFileirasDeGraosPorEspiga;
		this.comprimentoDeEspigas = comprimentoDeEspigas;
		this.rendimentoDeGraos = rendimentoDeGraos;
		this.capacidadeDeExpansao = capacidadeDeExpansao;
		this.massaDeCemGraos = massaDeCemGraos;
		this.numeroDeEspigas = numeroDeEspigas;
		this.diametroDoColmo = diametroDoColmo;
		this.comprimentoDeGrao = comprimentoDeGrao;
		this.larguraDeGrao = larguraDeGrao;
		this.espessuraDeGrao = espessuraDeGrao;
		this.espessuraDoPericarpo = espessuraDoPericarpo;
		this.difusividadeTermicaDoPericarpo = difusividadeTermicaDoPericarpo;
		this.teorDeProteina = teorDeProteina;
		this.teorDeOleo = teorDeOleo;
		this.amidoTotal = amidoTotal;
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
		this.informacoesAdicionais = informacoesAdicionais;
	}

	public Germplasm() {
		
	}
}
