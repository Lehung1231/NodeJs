import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import {Product} from "../models/product";
export const getAll = async (req, res) => {
    try {
        // const { data: products } = await axios.get(
        //     `${API_URI}`
        // );
        const products = await Product.find();
        if (products.length === 0) {
            res.send({
                messenger: "Danh sách sản phẩm trống",
            });
        }
        return res.json(products);
    } catch (err) {
        res.status(500).json({ messenger: err });
    }
};

export const getDetail = async (req, res) => {
    try {
        // const { data: product } = await axios.get(`${API_URI}${req.params.id}`);
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.send({
                messenger: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ messenger: err });
    }
};

export const create = async (req, res) => {
    try {
        // const { data: product } = await axios.post(`${API_URI}`, req.body);
        const products = await Product.create(req.body);
        if (!products) {
            res.send({
                messenger: "Thêm sản phẩm không thành công",
            });
        }
        return res.json(products);
    } catch (err) {
        res.status(500).json({ messenger: err });
    }
};

export const remove = async (req, res) => {
    try {
        // await axios.delete(`${API_URI}${req.params.id}`);
        const products = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Sản phẩm đã được xóa thành công",
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const update = async (req, res) => {
    try {
        // const { data: product } = await axios.put(
        //     `${API_URI}${req.params.id}`,
        //     req.body
        // );
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            res.send({
                messenger: "Update sản phẩm không thành công",
            });
        }
        return res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ messenger: err });
    }
};