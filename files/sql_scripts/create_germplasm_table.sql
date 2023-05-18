CREATE TABLE `germplasm` (
	`id` int NOT NULL AUTO_INCREMENT,
    `deletado` boolean DEFAULT 0,
    `nome` varchar(90),
    `tipo_de_material_genetico` varchar(90),
    `textura_do_grao` varchar(90),
    `origem` varchar(90),
    `transgenico` boolean DEFAULT FALSE,
    `eventos_transgenicos` varchar(90),
    `local_na_camara_fria` varchar(90),
    `data_de_entrada` varchar(90),
    `data_da_ultima_colheita` varchar(90),
	`primeira_folha_pigmentacao_antocianinica_da_bainha` int DEFAULT NULL,
	`primeira_folha_forma_do_apice` int DEFAULT NULL,
	`folhagem_intensidade_da_cor_verde` int DEFAULT NULL,
	`folha_ondulacao_da_margem_da_lamina` int DEFAULT NULL,
	`folha_angulo_entre_a_lamina_e_o_colmo` int DEFAULT NULL,
	`folha_curvatura_da_lamina` int DEFAULT NULL,
	`colmo_grau_do_zig_zag` int DEFAULT NULL,
	`pendao_ciclo_ate_a_antese` int DEFAULT NULL,
	`pendao_pigmentacao_antocianinica_na_base_da_gluma` int DEFAULT NULL,
	`pendao_pigmentacao_antocianinica_da_gluma_excluida_a_base` int DEFAULT NULL,
	`pendao_pigmentacao_antocianinica_das_anteras` int DEFAULT NULL,
	`pendao_angulo_entre_o_eixo_principal_e_os_ramos_laterais` int DEFAULT NULL,
	`pendao_curvatura_dos_ramos_laterais` int DEFAULT NULL,
	`pendao_numero_de_ramificacoes_primarias` int DEFAULT NULL,
	`espiga_ciclo_ate_o_aparecimento_dos_estigmas` int DEFAULT NULL,
	`espiga_pigmentacao_antocianinica_dos_estigmas` int DEFAULT NULL,
	`colmo_pigmentacao_antocianinica_das_raizes_aereas` int DEFAULT NULL,
	`pendao_densidade_das_espiguetas` int DEFAULT NULL,
	`folha_pigmentacao_antocianinica_da_bainha` int DEFAULT NULL,
	`colmo_pigmentacao_antocianinica_dos_entrenos` int DEFAULT NULL,
	`pendao_comp_do_eixo_principal_acima_do_ramo_lateral_mais_baixo` int DEFAULT NULL,
	`pendao_comp_do_eixo_principal_acima_do_ramo_lateral_mais_alto` int DEFAULT NULL,
	`pendao_comp_do_ramo_lateral` int DEFAULT NULL,
	`planta_comp` int DEFAULT NULL,
	`planta_relacao_alt_ins_pedunculo_espiga_mais_alta_e_comp_planta` int DEFAULT NULL,
	`folha_largura_da_lamina` int DEFAULT NULL,
	`pedunculo_comp` int DEFAULT NULL,
	`espiga_comp` int DEFAULT NULL,
	`espiga_diametro_no_meio_da_espiga` int DEFAULT NULL,
	`espiga_forma` int DEFAULT NULL,
	`espiga_numero_de_fileiras_de_graos` int DEFAULT NULL,
	`espiga_numero_de_cores_dos_graos` int DEFAULT NULL,
	`grao_intensidade_da_cor_amarela` int DEFAULT NULL,
	`grao_comp` int DEFAULT NULL,
	`grao_largura` int DEFAULT NULL,
	`espiga_tipo_de_grao` int DEFAULT NULL,
	`espiga_enrugamento_do_extremo_superior_do_grao` int DEFAULT NULL,
	`espiga_cor_do_extremo_superior_do_grao` int DEFAULT NULL,
	`espiga_cor_do_lado_dorsal_do_grao` int DEFAULT NULL,
	`tipo_de_grao_estourado` int DEFAULT NULL,
	`espiga_pigmentacao_antocianinica_das_glumas_do_sabugo` int DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
